import { createModuleFederationConfig } from "@module-federation/modern-js";
import config from "./package.json";

export default createModuleFederationConfig({
	name: "host_modern",
	remotes: {
		remote_modern: "remote_modern@http://localhost:3001/remoteEntry.js",
	},
	shared: {
		...config.dependencies,
	},
});
