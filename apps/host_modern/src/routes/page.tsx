import { Helmet } from "@modern-js/runtime/head";
import { Link } from "@modern-js/runtime/router";
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
		<main>
			<Link to="/remote-modern">To ModernJS Remote</Link>
		</main>
	</div>
);

export default Index;
