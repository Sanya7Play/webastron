export default function PaymentComponent() {
	return (
		<div className="flex flex-col justify-center items-center my-7 w-1/2 mx-auto p-5 rounded-2xl shadow-md/30 bg-text/10 gap-10">
			<h1 className="text-3xl font-bold text-text border-b-2 border-text">
				Оплата и гарантии
			</h1>
			<h1 className="text-2xl font-bold text-text">
				Условия оплаты и передачи товара
			</h1>
			<div className="flex flex-col gap-6">
				<div className="rounded-md p-5 border-l-4 border-text bg-white text-text font-semibold w-full">
					<p className='text-lg'>
						Фабрика заключает с покупателем договор. В нём прописаны: <br/>
						1. товар,<br/>
						2. сроки отгрузки,<br/>
						3. условия доставки (при необходимости),<br/>
						4. стоимость,<br/>
						5. сроки и порядок оплаты.<br/>
						Оплата производится на основании заключённого договора.
						Товар передаётся покупателю при условии оплаты клиентом полной стоимости, кроме случаев оформления покупки в кредит.<br/>
						Мебель передаётся в разобранном виде по накладной, в заводской упаковке, с указанием количества элементов.<br/>
						При отправке транспортными компаниями фабрика делает дополнительную упаковку, обеспечивающую безопасную транспортировку мебели.
						Мебель сопровождается подробными инструкциями по сборке.
					</p>
				</div>
				<h1 className="text-2xl text-center font-bold text-text">
					Гарантийное обслуживание
				</h1>
				<div className="rounded-md p-5 border-l-4 border-text bg-white text-text font-semibold w-full">
					<p className='text-lg'>
						Фабрика предоставляет гарантийное и постгарантийное обслуживание.<br/>
						Гарантия на мебель составляет 2 года с момента покупки.<br/>
						В течение гарантийного срока фабрика Astron бесплатно заменяет или ремонтирует детали с дефектом,
						при условии, что дефект возник по нашей вине. Широкая дилерская сеть позволяет производить замену в кратчайшие сроки.<br/>
						Срок эксплуатации мебели — 15 лет.
					</p>
				</div>
			</div>
		</div>
	)
}