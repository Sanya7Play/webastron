'use client'

import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import {Category, Product} from "@/src/generated/prisma/client";
import axios from "axios";
import {ProductItem} from "@/components/constants/constants";

interface AstronContextInterface {
	breadCrumbMenu: string;
	setBreadCrumbMenu: (breadCrumbMenu: string) => void;
	products: Product[];
	categories: Category[];
	setCategories: (category: Category[]) => void;
	loading: boolean;
	setLoading: (loading: boolean) => void;
	query: number | null;
	setQuery: (query: number | null) => void;
	search: string;
	setSearch: (search: string) => void;
	searchProducts: ProductItem[];
	setSearchProducts: (searchProducts: ProductItem[]) => void;
	open: boolean;
	setOpen: (open: boolean) => void;
}
const AstronContext = createContext<AstronContextInterface | null>(null);

export default function AppContext({ children }: { children: ReactNode }) {
	const [categories, setCategories] = useState<Category[]>([]);
	const [products, setProducts] = useState<Product[]>([]);
	const [query, setQuery] = useState<number | null>(null);
	const [breadCrumbMenu, setBreadCrumbMenu] = useState<string>('Все');
	const [loading, setLoading] = useState(false);
	const [search, setSearch] = useState<string>("");
	const [searchProducts, setSearchProducts] = useState<ProductItem[]>([]);
	const [open, setOpen] = useState<boolean>(false);
	useEffect(() => {
		async function getProducts(){
			try {
				setLoading(true);
				const responseProducts = await axios.get<Product[]>("/api/products", {
					params: query !== null ? { query } : {},
				});
				const responseCategories = await axios.get<Category[]>('/api/category');
				setCategories(responseCategories.data);
				setProducts(responseProducts.data);
			}
			catch (e){
				console.error(e);
			}
			finally {
				setLoading(false);
			}
		}
		getProducts();
	},[query]);
	return (
		<AstronContext.Provider value={{
			search,
			open,
			searchProducts,
			setOpen,
			setSearch,
			setSearchProducts,
			loading,
			setLoading,
			query,
			setQuery,
			breadCrumbMenu,
			setBreadCrumbMenu,
			products,
			categories,
			setCategories,
		}}>
			{children}
		</AstronContext.Provider>
	)
}
export function useAstronContext() {
	const context = useContext(AstronContext);
	if (!context) throw new Error();
	return context;
}