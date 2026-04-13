import {Product} from "@/src/generated/prisma/client";


export const menuLinks = [
	{
		name: "Доставка и оплата",
		href: '/delivery',
	},
	{
		name: "Пункты выдачи",
		href: '/delivery',
	},
	{
		name: "Магазины",
		href: '/delivery',
	},
	{
		name: "Товары",
		href: '/product',
	}
]

export const navigationMenuLinks = [
	{
		name: "О компании",
		href: '/about',
	},
	{
		name: "Контакты",
		href: '/contacts',
	},
	{
		name: "Доставка",
		href: '/delivery',
	},
	{
		name: "Оплата",
		href: '/payment',
	},

];
export type ProductItem = Product & {category: {name: string}};