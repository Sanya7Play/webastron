'use client'
import BreadCrumbMenu from "@/components/shared/BreadCrumbMenu";
import {Button} from "@/components/ui/button";
import {useEffect, useState} from "react";
import axios from "axios";
import {Product} from "@/src/generated/prisma/client";
import {useParams} from "next/navigation";
import {useAstronContext} from "@/components/shared/context/AppContext";
import {Skeleton} from "@/components/ui/skeleton";

type ProductItem = Product & {category: {name: string}};
export default function ProductPageComponent(){
	const {id} = useParams();
	const {setBreadCrumbMenu, loading, setLoading} = useAstronContext();
	const [productItem, setProductItem] = useState<ProductItem>();
	const [activeImage, setActiveImage] = useState<number>(0);
	useEffect(() => {
		async function getProduct(){
			try {
				setLoading(true);
				const response = await axios.get('/api/productId',{
					params: {productId:	id}
				});
				setProductItem(response.data);
				setBreadCrumbMenu(response.data.category?.name);
			}
			catch (e){
				console.error(e);
			}
			finally {
				setLoading(false);
			}
		}
		getProduct();
	}, []);
	return (
		<div className="flex flex-col my-7 w-3/5 mx-auto p-8 rounded-2xl shadow-md/30 bg-text/10 gap-5">
			<div className="flex flex-col items-center justify-center w-1/2 mx-auto gap-5">
				<h1 className="text-3xl font-bold text-text border-b-2 border-text">
					Каталог
				</h1>
			</div>
			<BreadCrumbMenu category={productItem?.category.name} product={productItem}  />
			{loading ? (
				<div className="flex flex-row gap-5">
					<div className="flex flex-col gap-4">
						<Skeleton className="w-[750px] h-[420px] rounded-xl bg-text/30" />
						<div className="flex flex-row gap-4 space-y-4">
							<Skeleton className="w-[175px] h-[105px] bg-text/30" />
							<Skeleton className="w-[175px] h-[105px] bg-text/30" />
							<Skeleton className="w-[175px] h-[105px] bg-text/30" />
							<Skeleton className="w-[175px] h-[105px] bg-text/30" />
						</div>
					</div>
					<div className="flex flex-col p-2 gap-4">
						<Skeleton className="w-[200px] h-[20px] rounded-xl bg-text/30" />
						<Skeleton className="w-[160px] h-[30px] rounded-xl bg-text/30" />
						<Skeleton className="w-[180px] h-[30px] rounded-xl bg-text/30" />
						<Skeleton className="w-[250px] h-[400px] rounded-xl bg-text/30" />
					</div>
				</div>
			) : (
				<div className='flex flex-row gap-5'>
					<div className="flex flex-col gap-5">
						{productItem?.imgSrc.map((img, index) => (
							index === 0 && (
								<div
									key={index}
									className={`relative w-[750px] h-[420px] rounded-xl shadow-3xl overflow-hidden`}
								>
									{/* eslint-disable-next-line @next/next/no-img-element */}
									<img
										src={productItem?.imgSrc[0]}
										alt={productItem?.name}
										className="object-cover w-full h-full"
									/>
								</div>
							)
						))}
						<div className="grid grid-cols-4 gap-4">
							{productItem?.imgSrc.map((img, index) => (
								<div
									key={index}
									onClick={() => setActiveImage(index)}
									className={`relative w-[175px] h-[105px] rounded-xl shadow-3xl overflow-hidden cursor-pointer 
									${activeImage === index ? ('border-2 border-text') : ('border-2')}`}>
									{/* eslint-disable-next-line @next/next/no-img-element */}
									<img
										src={productItem?.imgSrc[index]}
										alt={productItem?.name}
										className="object-cover w-full h-full"
									/>
								</div>
							))}
						</div>
					</div>
					<div className='flex flex-col p-2 gap-2'>
						<div className='flex flex-col gap-2'>
							<p className='text-text text-xl font-semibold'>{productItem?.category.name}</p>
							<h1 className='text-text text-2xl font-bold'>{productItem?.name}</h1>
						</div>
						<Button
							className='w-4/5 text-base'
						>
							Купить во ВКонтакте
						</Button>
						<h1 className='text-text text-xl font-bold'>Описание</h1>
						<p className='text-text text-base'>
							{productItem?.description}
						</p>
					</div>
				</div>
			)}

		</div>
	)
}