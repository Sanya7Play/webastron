import Header from "@/components/shared/Header";
import ContactComponent from "@/components/shared/ContactComponent";
import Footer from "@/components/shared/Footer";

export default function ContactsPage(){
	return (
		<div className="flex flex-col">
			<Header/>
			<ContactComponent/>
			<Footer/>
		</div>
	)
}