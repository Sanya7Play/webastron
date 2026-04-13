import CallbackBlock from "@/components/shared/CallbackBlock";
import FooterBlock from "@/components/shared/FooterBlock";
import FooterDescription from "@/components/shared/FooterDescription";

export default function Footer() {
	return (
		<div className="flex-col">
			<CallbackBlock/>
			<FooterBlock/>
			<FooterDescription/>
		</div>
	)
};