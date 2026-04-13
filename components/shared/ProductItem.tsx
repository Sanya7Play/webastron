import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Product} from "@/src/generated/prisma/client";
interface IProps {
	product: Product;
}
export default function ProductItem({product}: IProps) {
	return (
		<div className="flex flex-col items-center justify-center gap-4">
			<h1 className="text-text font-bold text-2xl">{product.name}</h1>
			<div className="relative w-[480px] h-[320px] rounded-2xl shadow-3xl overflow-hidden">
				<Image
					src={product.imgSrc[0]}
					alt={product.name}
					fill
					className="object-cover object-center"
					sizes="(max-width: 768px) 100vw, 480px"
					priority
				/>
			</div>
			<p className="text-base text-text text-justify font-semibold w-8/10 line-clamp-2">
				{product.description}
			</p>
			<Link href={`/product/${product.id}`}>
				<Button
					className='cursor-pointer text-base'
				>
					Подробнее
				</Button>
			</Link>
		</div>
	)
}