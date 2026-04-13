import Link from "next/link";

export default function AboutComponent() {
	return (
		<div className="flex flex-col justify-center items-center my-7 w-1/2 mx-auto p-5 rounded-2xl shadow-md/30 bg-text/10 gap-10">
			<h1 className="text-3xl font-bold text-text border-b-2 border-text">
				О фабрике
			</h1>
			<div className="flex flex-col gap-6">
				<div className="rounded-md p-5 border-l-4 border-text bg-white text-text font-semibold">
					<p className='text-lg'>
						Фабрика Astron основана в 1995 году.
						Начинали мы с оптики для высокоточных приборов военного назначения.
						Позже технологии работы со стеклом нашли применение в изготовлении торгового оборудования и гнутого стекла.
						С 1998 года мы специализируемся на производстве корпусной мебели.
					</p>
				</div>
				<div className="rounded-md p-5 border-l-4 border-text bg-white text-text font-semibold">
					<p className='text-lg'>
						На протяжении всего времени существования мы концентрируем особое внимание на качестве и стиле.
						Это позволяет предлагать взыскательным клиентам продукцию достойного уровня.
					</p>
				</div>
				<div className="rounded-md p-5 border-l-4 border-text bg-white text-text font-semibold">
					<p className='text-lg'>
						Astron уделяет много внимания инновациям и новым технологиям.
						Благодаря этому, на фабрике появился собственный участок производства гнутого стекла, покрасочный цех,
						участок производства клееных и гнуто-клееных фасадов.
						Это даёт нашим клиентам возможность создавать индивидуальные интерьерные решения.
					</p>
				</div>
				<div className="rounded-md p-5 border-l-4 border-text bg-white text-text font-semibold">
					<p className='text-lg'>
						Astron живёт разработкой новой мебели.
						Поддерживая коллекции прошлых лет, мы всё время трудимся над созданием актуальных предложений.
						Фабрика предлагает около 2500 модулей.
						Их разнообразие и совместимость позволяют находить индивидуальные решения для каждого заказчика.
					</p>
				</div>
				<div className="rounded-md p-5 border-l-4 border-text bg-white text-text font-semibold">
					<p className='text-lg'>
						Для нас важно делать не просто качественную мебель, мы создаём интерьер.
						Под этим мы понимаем применение модных декоров,
						поиск стильных форм, разработку продуманной эргономики,
						не в ущерб долговечности и безопасности мебели конечно.
					</p>
				</div>
				<div className="rounded-md p-5 border-l-4 border-text bg-white text-text font-semibold">
					<p className='text-lg'>
						Производство фабрики находится в городе Заречном Пензенской области.
						В Москве есть официальное представительство.
						Astron представлен дилерской сетью в 140 городах России.
					</p>
				</div>
			</div>
			<h1 className="text-3xl font-bold text-text border-b-2 border-text">
				Основные направления
			</h1>
			<div className='flex flex-row gap-6'>
				<Link
					href='/'
					className='text-lg font-bold text-text border-b-2 border-white/5 hover:border-text hover:font-bold'
				>
					Кухонные гарнитуры
				</Link>
				<Link
					href='/'
					className='text-lg font-bold text-text border-b-2 border-white/5 hover:border-text hover:font-bold'
				>
					Гостиные
				</Link>
				<Link
					href='/'
					className='text-lg font-bold text-text border-b-2 border-white/5 hover:border-text hover:font-bold'
				>
					Спальни
				</Link>
				<Link
					href='/'
					className='text-lg font-bold text-text border-b-2 border-white/5 hover:border-text hover:font-bold'
				>
					Детские комнаты
				</Link>
				<Link
					href='/'
					className='text-lg font-bold text-text border-b-2 border-white/5 hover:border-text hover:font-bold'
				>
					Ванны
				</Link>
				<Link
					href='/'
					className='text-lg font-bold text-text border-b-2 border-white/5 hover:border-text hover:font-bold'
				>
					Прихожие
				</Link>
			</div>
			<h1 className="text-3xl font-bold text-text border-b-2 border-text">
				Контакты
			</h1>
			<div className='flex flex-col gap-2 text-text font-semibold'>
				<p>а/я 344, г. Заречный, Пензенская область, 442962</p>
				<p>тел.: +7 8412 61-40-82, +7 8412 65-54-08</p>
				<p>факс: +7 8412 65-53-08</p>
				<div className='font-bold'>info@astron-mebel.ru</div>
			</div>
		</div>
	)
}