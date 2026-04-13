import HeaderTop from "@/components/shared/HeaderTop";
import HeaderBottom from "@/components/shared/HeaderBottom";
import NavMenu from "@/components/shared/NavMenu";


export default function Header() {
	return (
		<div className="flex flex-col">
			<HeaderTop/>
			<HeaderBottom/>
			<NavMenu/>
		</div>
	)
}