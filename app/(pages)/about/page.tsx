import Header from "@/components/shared/Header";
import AboutComponent from "@/components/shared/AboutComponent";
import Footer from "@/components/shared/Footer";

export default function AboutPage(){
	return (
		<div className="flex flex-col">
			<Header />
			<AboutComponent/>
			<Footer/>
		</div>
	)
}