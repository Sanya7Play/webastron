import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import DeliveryComponent from "@/components/shared/DeliveryComponent";

export default function DeliveryPage(){
	return (
		<div className='flex flex-col'>
			<Header/>
			<DeliveryComponent/>
			<Footer/>
		</div>
	)
}