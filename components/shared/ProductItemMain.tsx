import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Product} from "@/src/generated/prisma/client";
import Link from "next/link";

interface ProductItemMainProps {
	product: Product;
}
export default function ProductItemMain({product}: ProductItemMainProps) {
	return (
		<div className="flex flex-col items-center justify-center gap-3">
			<div className="relative w-[380px] h-[320px] rounded-2xl shadow-3xl overflow-hidden">
				<Image
					src={product.imgSrc[0]}
					alt={product.name}
					fill
					className="object-cover object-center"
					sizes="(max-width: 768px) 100vw, 380px"
				/>
			</div>
			<h1 className="text-xl font-semibold">{product.name}</h1>
			<Link href={`/product/${product.id}`}>
				<Button
					variant="default"
					size="default"
					className="cursor-pointer text-base"
				>
					Подробнее
				</Button>
			</Link>
		</div>
	)
}