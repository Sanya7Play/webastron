import Image from "next/image";
import Link from "next/link";
import SearchInput from "@/components/shared/SearchInput";

export default function HeaderBottom() {
	return (
		<div className="flex flex-row justify-between items-center px-40">
			<Link href="/">
				<Image
					src="/astron-logo.png"
					alt="AstronLogo"
					width={200}
					height={200}
					className="h-25 w-auto"
					priority
				/>
			</Link>

			<SearchInput/>

			<div className="flex">
				<Link href={"https://yandex.ru/maps/-/CPramOiZ"} className="flex flex-col text-center">
					<p>г. Липецк, ул.Первомайская 57,</p>
					<p>пн-сб(10:00 - 18:00)</p>
				</Link>
			</div>
		</div>
	)
}