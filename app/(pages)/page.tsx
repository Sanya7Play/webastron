import Header from "@/components/shared/Header";
import MainWindow from "@/components/shared/MainWindow";
import DescriptionBlock from "@/components/shared/DescriptionBlock";
import BlockProducts from "@/components/shared/BlockProducts";
import LocationBlock from "@/components/shared/LocationBlock";
import Footer from "@/components/shared/Footer";

export default function Home() {
  	return (
    	<div className="flex flex-col">
			<Header/>
			<MainWindow/>
			<DescriptionBlock/>
			<BlockProducts/>
			<LocationBlock/>
			<Footer/>
		</div>
  	);
}
