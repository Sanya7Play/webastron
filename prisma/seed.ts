import fs from "node:fs/promises";
import path from "node:path";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaPg({
	connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

const PHOTO_DIR = path.join(process.cwd(), "public", "photo");

function isImageFile(fileName: string) {
	return /\.(jpg|jpeg|png|webp|avif)$/i.test(fileName);
}

function normalizeText(text: string) {
	return text.trim().replace(/\s+/g, " ");
}

function detectCategory(productName: string) {
	const name = productName.toLowerCase();

	if (name.includes("кухня")) return "Кухни";
	if (name.includes("шкаф")) return "Шкафы";
	if (name.includes("спальня")) return "Спальни";
	if (name.includes("детская")) return "Детские";
	if (name.includes("гостиная")) return "Гостиные";
	if (name.includes("ванна")) return "Ванные";

	return "Без категории";
}

async function main() {
	console.log("Seed started...");

	const entries = await fs.readdir(PHOTO_DIR, { withFileTypes: true });
	const productFolders = entries.filter((entry) => entry.isDirectory());

	for (const folder of productFolders) {
		const productName = normalizeText(folder.name);
		const categoryName = detectCategory(productName);
		const productDir = path.join(PHOTO_DIR, folder.name);

		const fileEntries = await fs.readdir(productDir, { withFileTypes: true });

		const imageFiles = fileEntries
			.filter((file) => file.isFile() && isImageFile(file.name))
			.map((file) => file.name)
			.sort((a, b) => a.localeCompare(b, "ru"));

		if (imageFiles.length === 0) {
			console.log(`Skipped "${productName}" — no images found`);
			continue;
		}

		const imgSrc = imageFiles.map(
			(fileName) => `/photo/${folder.name}/${fileName}`
		);

		let category = await prisma.category.findFirst({
			where: { name: categoryName },
		});

		if (!category) {
			category = await prisma.category.create({
				data: { name: categoryName },
			});
		}

		const existingProduct = await prisma.product.findFirst({
			where: {
				name: productName,
				categoryId: category.id,
			},
		});

		if (existingProduct) {
			await prisma.product.update({
				where: { id: existingProduct.id },
				data: {
					imgSrc,
					description:
						existingProduct.description ||
						`${productName} — описание пока не заполнено`,
				},
			});

			console.log(`Updated: ${productName}`);
		} else {
			await prisma.product.create({
				data: {
					name: productName,
					description: `${productName} — описание пока не заполнено`,
					imgSrc,
					categoryId: category.id,
				},
			});

			console.log(`Created: ${productName}`);
		}
	}

	console.log("Seed finished.");
}

main()
	.catch((error) => {
		console.error("Seed error:", error);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});