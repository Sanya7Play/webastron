import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import PaymentComponent from "@/components/shared/PaymentComponent";

export default function PaymentPage() {
	return (
		<div className='flext flex-col'>
			<Header/>
			<PaymentComponent/>
			<Footer/>
		</div>
	)
}