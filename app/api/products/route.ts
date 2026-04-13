import {NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";


export async function GET(req: Request) {
	const {searchParams} = new URL(req.url)

	const query = searchParams.get("query");

	const queryString = searchParams.get("search");

	const take = searchParams.get("take") ? Number(searchParams.get("take")) : 0;

	const categoryId = query ? Number(query) : null;
	const search = queryString ? String(queryString) : '';
	const products = await prisma.product.findMany({
		where: {
			AND: [
				categoryId !== null ? {categoryId} : {},
				search ? {name: {contains: search, mode: 'insensitive'}} : {},
			],
		},
		include: {
			category: {
				select: {
					name: true,
				},
			},
		},
		take: search ? 5 : 30,
	});
	return NextResponse.json(products);
}