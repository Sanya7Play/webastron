import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {LucideMail, PhoneCall} from "lucide-react";

export default function FooterBlock() {
	return (
		<div className="flex flex-row items-center justify-center gap-10 px-10 py-5 bg-text">
			<div className="relative w-[180px] h-[100px] rounded-2xl shadow-3xl overflow-hidden">
				<Image
					src='/images11.png'
					alt='logo-footer'
					fill
					className="object-cover object-center"
					sizes="(max-width: 768px) 100vw, 480px"
				/>
			</div>
			<div className="grid grid-cols-3 gap-3 text-white font-semibold">
				<div className="flex flex-col gap-3">
					<h1>Меню сайта</h1>
					<div className="flex flex-col gap-3">
						<Link href='/delivery' className='cursor-pointer text-sm border-white hover:border-muted-foreground'>Доставка и оплата</Link>
						<Link href='/delivery' className='cursor-pointer text-sm border-white hover:border-muted-foreground'>Пункты выдачи</Link>
						<Link href='/delivery' className='cursor-pointer text-sm border-white hover:border-muted-foreground'>Магазины</Link>
						<Link href='/product' className='cursor-pointer text-sm border-white hover:border-muted-foreground'>Товары</Link>
					</div>
				</div>
				<div className="flex flex-col gap-3">
					<h1>Контактная информация</h1>
					<div className="flex flex-col justify-between gap-2">
						<Button
							variant='link'
							size='sm'
							className='text-white font-semibold justify-start cursor-pointer px-0'
						>
							<PhoneCall/>
							<p>+7 (904) 281 87 88</p>
						</Button>
						<Button
							variant='link'
							size='sm'
							className='text-white font-semibold justify-start cursor-pointer px-0'
						>
							<LucideMail/>
							<p>info@astron.ru</p>
						</Button>
						<Button
							variant='link'
							size='sm'
							className='text-white font-semibold justify-start cursor-pointer px-0'
						>
							<p>ВКонтакте</p>
						</Button>
					</div>
				</div>
				<div className="flex flex-col gap-6">
					<h1>Правовая информация</h1>
					<div className="flex flex-col gap-5">
						<Link href='/delivery' className='cursor-pointer text-sm border-white hover:border-muted-foreground'>Политика конфиденциальности</Link>
						<Link href='/delivery' className='cursor-pointer text-sm border-white hover:border-muted-foreground'>Обработка персональных данных</Link>
					</div>
				</div>
			</div>
		</div>
	)
}