import {Button} from "@/components/ui/button";
import {LucideMail, PhoneCall} from "lucide-react";
import Image from "next/image";

export default function LocationBlock(){
	return (
		<div className="flex flex-col items-center justify-center gap-8 p-10 bg-text/10 text-text">
			<h1 className='text-4xl font-bold'>Наш салон</h1>
			<h1 className='text-2xl font-semibold'>Студия мебели Astron</h1>
			<div className="flex flex-row items-center justify-center gap-5 p-1 text-white">
				<Button
					variant='default'
					className=''
				>
					<PhoneCall/>
					<p>+7 (904) 281 87 88</p>
				</Button>
				<Button>
					<LucideMail/>
					<p>Написать</p>
				</Button>
				<Button>
					<p>Вконтакте</p>
				</Button>
			</div>
		</div>
	)
}