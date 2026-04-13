import Image from "next/image";

export default function DeliveryComponent() {
	return (
		<div className="flex flex-col justify-center items-center my-7 w-1/2 mx-auto p-5 rounded-2xl shadow-md/30 bg-text/10 gap-10">
			<h1 className="text-3xl font-bold text-text border-b-2 border-text">
				Условия доставки и сборки мебели
			</h1>
			<div className="flex flex-col gap-6">
				<div className="flex flex-col items-center gap-6">
					<h1 className="text-2xl font-bold text-text">
						Доставка
					</h1>
					<div className="rounded-md p-5 border-l-4 border-text bg-white text-text font-semibold w-full">
						<p className='text-lg'>
							При покупке мебели напрямую с фабрики существует два способа доставки: <br/>
							1. Самовывоз со склада фабрики в г. Заречном; <br/>
							2. Самовывоз со склада фабрики в г. Москве; <br/>
							3. Отправка транспортной компанией. <br/>
							Расходы по доставке транспортной компанией оплачиваются при получении мебели.
						</p>
					</div>
				</div>
				<div className="flex flex-col gap-5 items-center">
					<h1 className="text-2xl font-bold text-text">
						Сборка
					</h1>
					<div className="rounded-md p-5 border-l-4 border-text bg-white text-text text-lg font-semibold">
						При заказе мебели с фабрики услуги по сборке предоставляются только в Пензе и Пензенской области. Жителям других регионов рекомендуем обратиться в специализированную организацию в вашем городе. Каждый элемент мебели укомплектован подробной инструкцией по сборке. В случае возникновения вопросов свяжитесь с нашими менеджерами по телефону или skype.
					</div>
				</div>
				<div className="flex flex-col items-center gap-6">
					<h1 className="text-2xl font-bold text-text">
						Доставка стеклянных витрин
					</h1>
					<div className="rounded-md p-5 border-l-4 border-text bg-white text-text font-semibold w-full">
						<p className='text-lg'>
							При покупке стеклянных витрин напрямую с фабрики существует два способа доставки: <br/>
							1. Отправка транспортной компанией. Расходы по доставке транспортной компанией оплачиваются при получении витрины;<br/>
							2. Отправка до дилера фабрики в вашем регионе. Доставка до вас осуществляется на условиях дилера.<br/>
							На фото — упаковки гнутых и прямых стёкол, которые позволяют доставить вам витрины в целости.
						</p>
						<div className="flex flex-col items-center justify-center w-full pt-5 gap-4">
							<Image src='/ypakovka-stekla-gnytogo.jpg' alt='ypakovka-stekla-gnytogo.jpg' width={600} height={600} />
							<p className='text-muted-foreground text-sm'>Упаковка гнутого и прямого стекла</p>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center gap-6">
					<h1 className="text-2xl font-bold text-text">
						Доставка шкафов Galant и мебель для спальни Prima
					</h1>
					<div className="rounded-md p-5 border-l-4 border-text bg-white text-text font-semibold w-full">
						<p className='text-lg'>
							При покупке мебели для спальни Galant и Prima напрямую с фабрики существует два способа доставки: Отправка транспортной компанией. Расходы по доставке транспортной компанией оплачиваются при получении мебели; Отправка до дилера фабрики в вашем регионе. Доставка до вас осуществляется на условиях дилера.
						</p>
					</div>
				</div>
				<div className="flex flex-col items-center gap-6">
					<h1 className="text-2xl font-bold text-text">
						Доставка мебели для кухни
					</h1>
					<div className="rounded-md p-5 border-l-4 border-text bg-white text-text font-semibold w-full">
						<p className='text-lg'>
							При покупке мебели для кухни напрямую с фабрики существует два способа доставки: Отправка транспортной компанией. Расходы по доставке транспортной компанией оплачиваются при получении мебели; Отправка до дилера фабрики в вашем регионе. Доставка до вас осуществляется на условиях дилера. На фото — упаковки пенала и тумбы для кухни, которые позволяют доставить вам мебель в целости.
						</p>
						<div className="flex flex-col items-center justify-center w-full pt-5 gap-4">
							<Image src='/penal-dlya-kyhni.jpg' alt='penal-dlya-kyhni.jpg' width={600} height={600} />
							<p className='text-muted-foreground text-sm'>Начальная стадия упаковки пенала</p>
							<Image src='/ypakovka-penala-dlya-kyhni.jpg' alt='ypakovka-penala-dlya-kyhni.jpg' width={600} height={600} />
							<p className='text-muted-foreground text-sm'>Упаковка пенала</p>
							<Image src='/tymba-dlya-kyhni.jpg' alt='tymba-dlya-kyhni.jpg' width={600} height={600} />
							<p className='text-muted-foreground text-sm'>Начальная стадия упаковки тумбы</p>
							<Image src='/ypakovka-tymbi-dlya-kyhni.jpg' alt='ypakovka-tymbi-dlya-kyhni.jpg' width={600} height={600} />
							<p className='text-muted-foreground text-sm'>Упаковка тумбы</p>
							<Image src='/ypakovka-polok.jpg' alt='ypakovka-polok.jpg' width={600} height={600} />
							<p className='text-muted-foreground text-sm'>Упаковка полок</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}