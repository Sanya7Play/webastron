import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import ProductComponent from "@/components/shared/ProductComponent";

export default function ProductsPage(){
	return (
		<div className='flex flex-col'>
			<Header/>
			<ProductComponent/>
			<Footer/>
		</div>
	)
}