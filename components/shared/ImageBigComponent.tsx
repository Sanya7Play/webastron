import {Product} from "@/src/generated/prisma/client";

interface IProps {
	product: Product;
	index: number;
}
export default function ImageBigComponent({product, index}: IProps) {
	return (
		<div className="flex flex-row gap-4">
			<div className="relative w-[175px] h-[105px] rounded-xl shadow-3xl overflow-hidden">
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src={product?.imgSrc[index]}
					alt={product?.name}
					className="object-cover w-full h-full"
				/>
			</div>
		</div>
	)
}