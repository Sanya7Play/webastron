"use client"
import Link from "next/link";
import {Menu} from "lucide-react";
import DropMenu from "@/components/shared/DropMenu";
import {navigationMenuLinks} from "@/components/constants/constants";
import {useState} from "react";
import {usePathname} from "next/navigation";


export default function NavMenu(){
	const pathname = usePathname();
	const [activeMenu, setActiveMenu] = useState<string>(pathname);
	return (
		<div className="flex flex-row h-15 bg-[#2B3743] text-white justify-center items-center gap-4">
			<DropMenu>
				<Link href='' className='flex justify-center text-base cursor-pointer items-center w-30 h-13 bg-white/20 rounded-md hover:bg-white/40'>
					<span className='flex flex-row items-center justify-center gap-2'>
						<Menu
							size={20}
						/>
						<p>Каталог</p>
					</span>
				</Link>
			</DropMenu>
			{navigationMenuLinks.map((link, index) => (
				<Link
					href={link.href}
					key={index}
					onClick={() => setActiveMenu(link.href)}
					className={`${activeMenu === link.href ? 'flex justify-center items-center w-30 h-13 bg-white/20 hover:bg-white/20 rounded-md' : 'flex justify-center items-center w-30 h-13 hover:bg-white/20 rounded-md' } `}
				>
					{link.name}
				</Link>
			))}
		</div>
	)
}