import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import ProductPageComponent from "@/components/shared/ProductPageComponent";

export default function ProductPage(){
	return (
		<div className="flex flex-col">
			<Header/>
			<ProductPageComponent/>
			<Footer/>
		</div>
	)
}