import Image from "next/image";

export default function BlockProducts(){
	return (
		<div className="flex flex-col items-center justify-center gap-10 p-10 bg-beige text-text">
			<h1 className='text-[32px] font-bold'>Не только кухни — посмотрите и другие решения</h1>
			<div className="flex flex-col items-center justify-center gap-10">
				<h1 className='text-2xl font-bold'>Детские комнаты</h1>
				<div className="relative w-[800px] h-[480px] rounded-2xl overflow-hidden">
					<Image
						src='/photo/Детская/Детская (1).jpg'
						alt='Детские комнаты'
						fill
						className="object-cover object-center"
						sizes="(max-width: 768px) 100vw, 380px"
					/>
				</div>
				<div className="flex flex-row gap-10">
					<div className="flex flex-col items-center justify-center gap-5">
						<h1 className='text-2xl font-bold'>Шкафы</h1>
						<div className="relative w-[380px] h-[320px] rounded-2xl overflow-hidden">
							<Image
								src='/photo/Шкаф Манхеттен/Шкаф Манхеттен (1).jpg'
								alt='Шкаф Манхеттен'
								fill
								className="object-cover object-center"
								sizes="(max-width: 768px) 100vw, 380px"
							/>
						</div>
					</div>
					<div className="flex flex-col items-center justify-center rounded-2xl gap-4 shadow-3xl">
						<h1 className='text-2xl font-bold'>Ванны</h1>
						<div className="relative w-[380px] h-[320px] rounded-2xl overflow-hidden">
							<Image
								src='/photo/Ванна/20211106_130923.jpg'
								alt='Детские комнаты'
								fill
								className="object-cover object-center"
								sizes="(max-width: 768px) 100vw, 380px"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}