'use client'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList, BreadcrumbPage,
	BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {useAstronContext} from "@/components/shared/context/AppContext";
import {Product} from "@/src/generated/prisma/client";
import {Skeleton} from "@/components/ui/skeleton";

interface Props {
	category?: string;
	product?: Product;
}
export default function BreadCrumbMenu({category, product}: Props) {
	const {breadCrumbMenu, loading} = useAstronContext();
	return (
		<Breadcrumb>
			<BreadcrumbList className="px-7 flex items-center">
				{loading ? (
					<>
						<>
							<BreadcrumbItem>
								<BreadcrumbLink href="/">Главная</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								{breadCrumbMenu === '' || breadCrumbMenu === 'Все' ? (
									<BreadcrumbPage>Каталог</BreadcrumbPage>

								) : (
									<BreadcrumbLink href="/product">Каталог</BreadcrumbLink>
								)}
							</BreadcrumbItem>
							{(breadCrumbMenu !== '' && breadCrumbMenu !== 'Все') && (
								<>
									{product ? (
										<>
											<BreadcrumbSeparator />
											<BreadcrumbItem>
												<Skeleton className="w-[75px] h-[15px] bg-text/30" />
											</BreadcrumbItem>
											<BreadcrumbSeparator />
											<BreadcrumbItem>
												<Skeleton className="w-[75px] h-[15px] bg-text/30" />
											</BreadcrumbItem>
										</>
									) : (
										<>
											<BreadcrumbSeparator />
											<BreadcrumbItem>
												<Skeleton className="w-[75px] h-[15px] bg-text/30" />
											</BreadcrumbItem>
										</>
									)}
								</>
							)}
						</>
					</>
				) : (
					<>
						<BreadcrumbItem>
							<BreadcrumbLink href="/">Главная</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							{breadCrumbMenu === '' || breadCrumbMenu === 'Все' ? (
								<BreadcrumbPage>Каталог</BreadcrumbPage>

							) : (
								<BreadcrumbLink href="/product">Каталог</BreadcrumbLink>
							)}
						</BreadcrumbItem>
						{(breadCrumbMenu !== '' && breadCrumbMenu !== 'Все') && (
							<>
								{product ? (
									<>
										<BreadcrumbSeparator />
										<BreadcrumbItem>
											<BreadcrumbLink href={`/product`}>{category}</BreadcrumbLink>
										</BreadcrumbItem>
										<BreadcrumbSeparator />
										<BreadcrumbItem>
											<BreadcrumbPage>{product.name}</BreadcrumbPage>
										</BreadcrumbItem>
									</>
								) : (
									<>
										<BreadcrumbSeparator />
										<BreadcrumbItem>
											<BreadcrumbPage>{category}</BreadcrumbPage>
										</BreadcrumbItem>
									</>
								)}
							</>
							)}
					</>
				)}
			</BreadcrumbList>
		</Breadcrumb>
	)
}