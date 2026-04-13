import Link from "next/link";

export default function ContactComponent() {
	return (
		<div className="flex flex-col justify-center items-center my-7 w-1/2 mx-auto p-5 rounded-2xl shadow-md/30 bg-text/10 gap-10">
			<h1 className="text-3xl font-bold text-text border-b-2 border-text">
				Контакты
			</h1>
			<h1 className="text-2xl font-bold text-text">
				Cтудия мебели Astron
			</h1>
			<div className="flex flex-col w-full gap-6">
				<div className="rounded-md p-5 border-l-4 border-text bg-white text-text font-semibold">
					<div className='grid grid-cols-2 gap-2'>
						<div className="flex flex-col justify-center items-end">
							<p>Электронная почта:</p>
							<p>Телефон:</p>
							<p>Адрес:</p>
							<p>Группа Вконтакте:</p>
						</div>
						<div className="flex flex-col justify-center items-start">
							<p>info@astron-mebel.ru</p>
							<p>тел.: +7 (904) 287-15-91, +7 (4742) 55-00-56</p>
							<p>г. Липецк, ул. Первомайская 57</p>
							<Link href='https://vk.com/baciolipetsk' className='border-b-1 border-text'>https://vk.com/baciolipetsk</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}