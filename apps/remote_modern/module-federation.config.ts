import { createModuleFederationConfig } from "@module-federation/modern-js";
import config from "./package.json";

export default createModuleFederationConfig({
	name: "remote_modern",
	filename: "remoteEntry.js",
	exposes: {
		"./app": "./src/routes/page.tsx",
	},
	shared: {
		...config.dependencies,
	},
});
