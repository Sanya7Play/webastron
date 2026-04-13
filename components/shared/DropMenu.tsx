import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import React from "react";
import {useAstronContext} from "@/components/shared/context/AppContext";

interface IProps {
	children?: React.ReactNode;
}
export default function DropMenu({children}: IProps) {
	const {categories, setQuery, setBreadCrumbMenu} = useAstronContext()
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				{children}
			</DropdownMenuTrigger>
			<DropdownMenuContent className='p-2 w-80 bg-text text-white'>
				<Link
					href={`/product/?category=Все товары`}
					onClick={() => {
						setQuery(null);
						setBreadCrumbMenu('Все');
					}}
					className='flex items-center p-4 hover:bg-white/20 rounded-[6px]'
				>
					Все товары
				</Link>
				{categories.map((category,index) => (
					<Link
						key={index}
						href={`/product/?category=${category.name}`}
						onClick={() => {
							setQuery(category.id);
							setBreadCrumbMenu(category.name || '');
						}}
						className='flex items-center p-4 hover:bg-white/20 rounded-[6px]'
					>
						{category.name}
					</Link>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}