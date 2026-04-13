import {Navigation} from "lucide-react";
import Link from "next/link";
import {menuLinks} from "@/components/constants/constants";

export default function HeaderTop() {
	return (
		<div className="flex flex-row p-3 w-full justify-between px-40 border-b border-gray-400">
			<div className='flex flex-row items-center justify-center gap-2 text-sm'>
				<Navigation size={14}/>
				<p>Воронеж</p>
				<p>+7 (904) 281-87-88</p>
			</div>
			<div className='flex flex-row items-center justify-center gap-7'>
				{menuLinks.map((link, index) => (
					<Link
						key={index}
						href={link.href}
						className='cursor-pointer text-sm border-b border-white hover:border-muted-foreground'
					>
						{link.name}
					</Link>
				))}
			</div>
		</div>
	)
}