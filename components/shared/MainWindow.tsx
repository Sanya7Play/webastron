'use client'
import {useAstronContext} from "@/components/shared/context/AppContext";
import ProductItemMain from "@/components/shared/ProductItemMain";
import {Skeleton} from "@/components/ui/skeleton";

export default function MainWindow() {
	const {products, loading} = useAstronContext();
	return (
		<div className="flex flex-col items-center justify-center bg-text/20 py-10">
			<div className="flex flex-col items-center justify-center gap-10">
				<h1 className="text-3xl font-semibold border-b-2 border-text">
					Кухни и мебель на заказ
				</h1>
				<p className="text-xl text-center">
					По индивидуальным размерам. Используем современные, экологичные,
					качественные материалы и комплектующие. Каждый наш проект уникален.
				</p>
			</div>
			<div className="grid [grid-template-columns:repeat(auto-fit,minmax(420px,1fr))] gap-2 w-full mt-10 px-20">
				{loading ? (
					Array.from({ length: 3 }).map((_, i) => (
						<div
							key={i}
							className="flex flex-col items-center gap-4">
							<Skeleton className="w-[380px] h-[320px] rounded-xl bg-text/30" />
							<Skeleton className="w-[200px] h-[30px] rounded-xl bg-text/30" />
							<Skeleton className="w-[150px] h-[30px] rounded-xl bg-text/30" />
						</div>
					)
				)) : (
					products.map((product) => (
						<ProductItemMain
							key={product.id}
							product={product}/>
					)).slice(0, 3)
				)}
			</div>
		</div>
	);
}