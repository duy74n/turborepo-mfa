import { Helmet } from "@modern-js/runtime/head";
import "./index.css";

const Index = () => (
	<div className="container-box">
		<Helmet>
			<link
				rel="icon"
				type="image/x-icon"
				href="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/favicon.ico"
			/>
		</Helmet>
		<main>remote modern js app</main>
	</div>
);

export default Index;
