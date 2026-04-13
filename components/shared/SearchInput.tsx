'use client'
import {Search, X} from "lucide-react";
import {Input} from "@/components/ui/input";
import {Product} from "@/src/generated/prisma/client";
import Link from "next/link";
import {useAstronContext} from "@/components/shared/context/AppContext";
import {useEffect} from "react";
import axios from "axios";
import {ProductItem} from "@/components/constants/constants";


export default function SearchInput() {
	const {searchProducts, search, setSearch, setOpen, open, setSearchProducts} = useAstronContext();
	useEffect(() => {
		async function searchProducts(){
			try {
				if (!search || search.length < 2 ){
					setSearchProducts([]);
					return;
				}
				const responseSearchProducts = await axios.get<ProductItem[]>("/api/products", {
					params: {search: search, take: 4},
				});
				setSearchProducts(responseSearchProducts.data);
			}
			catch (e){
				console.error(e);
			}
			finally {

			}
		}
		searchProducts();
	}, [search]);
	return (
		<div className="relative h-11 z-30 2xl:w-160 xl:w-100 lg:w-50 md:w-50">
			<Search className="absolute w-5 h-5 left-3 top-3 text-muted-foreground" />
			<Input
				type="text"
				placeholder="Поиск..."
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				onFocus={() => {
					setOpen(true);
				}}
				className="w-full h-full bg-neutral-300/40 outline-none pl-10 pr-3 rounded-2xl focus-visible:border-ring"
			/>
			{open && <X
                className="absolute w-5 h-5 right-3 top-3 text-muted-foreground/50 cursor-pointer hover:text-muted-foreground"
                onClick={() => {
					setSearch('');
					setOpen(false);
				}}
            />}
			{open && searchProducts.length > 0 && (
				<div className="absolute top-full left-0 w-full bg-white shadow-xl/60 border rounded-xl mt-2 z-50">
					<div className={`flex flex-col`}>
						{searchProducts.map((product: ProductItem) => (
							<Link
								key={product.id}
								href={`/product/${product.id}`}
								onClick={() => {
									setSearch('');
									setOpen(false);
								}}
							>
								<div className='flex flex-row items-center gap-3 p-2 my-3 mx-2 rounded-xs hover:bg-primary/10'>
									{/* eslint-disable-next-line @next/next/no-img-element */}
									<img
										src={product.imgSrc[0]}
										alt={product.name}
										className="w-20 h-20 rounded-xl"
									/>
									<div className='flex flex-col text-text font-semibold'>
										<span className='text-xl'>{product.name}</span>
										<span>{product.category.name}</span>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>

			)}
		</div>
	);
}