'use client'
import BreadCrumbMenu from "@/components/shared/BreadCrumbMenu";
import { Button } from "@/components/ui/button";
import {useAstronContext} from "@/components/shared/context/AppContext";
import ProductItem from "@/components/shared/ProductItem";
import {Skeleton} from "@/components/ui/skeleton";

export default function ProductComponent() {
	const {setBreadCrumbMenu, products, breadCrumbMenu, categories, setQuery, loading} = useAstronContext();
	return (
		<div className="flex flex-col my-7 w-3/5 mx-auto p-5 rounded-2xl shadow-md/30 bg-text/10 gap-2">
			<div className="flex flex-col items-center justify-center w-1/2 mx-auto gap-5">
				<h1 className="text-3xl font-bold text-text border-b-2 border-text">
					Каталог
				</h1>
			</div>

			<BreadCrumbMenu category={breadCrumbMenu}/>

			<div className="flex flex-row items-center gap-5 px-7">
				<Button
					variant="link"
					className={`px-0 cursor-pointer text-text font-bold text-base`}
					onClick={() =>{
						setQuery(null);
						setBreadCrumbMenu('Все')
					}}
				>
					Все
				</Button>
				{categories.map((category, index) => (
					<Button
						key={index}
						variant="link"
						className={`px-0 cursor-pointer text-text font-bold text-base`}
						onClick={() => {
							setQuery(category.id);
							setBreadCrumbMenu(category.name || '');
						}}
					>
						{category.name}
					</Button>
				))}
			</div>

			<div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(500px,1fr))]">
				{loading ? (
					Array.from({ length: 4 }).map((_, index) => (
						<div className="flex flex-col items-center p-2 gap-4" key={index}>
							<Skeleton className="w-[200px] h-[30px] rounded-xl bg-text/30" />
							<Skeleton className="w-[500px] h-[320px] rounded-xl bg-text/30" />
							<Skeleton className="w-[160px] h-[40px] rounded-xl bg-text/30" />
						</div>
					))
				) : (
					products.map((product, index) => (
						<ProductItem
							key={index}
							product={product}
						/>
					))
				)}
			</div>
		</div>
	);
}