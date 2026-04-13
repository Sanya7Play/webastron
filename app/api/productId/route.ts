import {prisma} from "@/lib/prisma";
import {NextResponse} from "next/server";


export async function GET(req: Request) {
	const {searchParams} = new URL(req.url);
	const productId = searchParams.get("productId");
	const id = productId ? Number(productId) : undefined;
	const product = await prisma.product.findUnique({
			where: {
				id: id,
			},
			include: {
				category: {
					select: {
						name: true,
					},
				},
			},
	})
	return NextResponse.json(product);
}