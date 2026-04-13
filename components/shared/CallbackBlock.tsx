import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";

export default function CallbackBlock(){
	return (
		<div className="flex flex-col items-center justify-center gap-8 p-10 bg-beige text-text">
			<h1 className='text-4xl font-bold'>Оставьте заявку и получите бесплатную консультацию</h1>
			<form action="" className='text-center w-1/5'>
				<div className="flex flex-col items-center justify-center gap-5 pb-8">
					<Input
						className='w-full border border-gray-200 bg-white h-11'
						placeholder='Ваше имя'
					/>
					<Input
						className='w-full border border-gray-200 bg-white h-11'
						placeholder='Номер телефона'
					/>
					<Textarea
						className='w-full border border-gray-200 bg-white h-20'
						placeholder='Ваши пожелания'
					/>
				</div>
				<Button
					variant='default'
					className='cursor-pointer'
				>
					Оставить заявку
				</Button>
			</form>
		</div>
	)
}