import { Helmet } from "@modern-js/runtime/head";
import { useState } from "react";
import "./index.css";

const Index = () => {
	const [count, setCount] = useState(0);

	return (
		<div className="container-box">
			<Helmet>
				<link
					rel="icon"
					type="image/x-icon"
					href="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/favicon.ico"
				/>
			</Helmet>
			<main>remote modern js app</main>
			<div>Count: {count}</div>
			<button onClick={() => setCount(count + 1)} type="button">
				Click me
			</button>
		</div>
	);
};

export default Index;
