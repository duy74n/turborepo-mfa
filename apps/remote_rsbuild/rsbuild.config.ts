import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import config from "./package.json";

export default defineConfig({
	plugins: [
		pluginReact(),
		pluginModuleFederation({
			name: "remote_rsbuild",
			filename: "remoteEntry.js",
			exposes: {
				"./app": "./src/App.tsx",
			},
			shared: {
				...config.dependencies,
				react: {
					eager: true,
				},
				"react-dom": {
					eager: true,
				},
			},
		}),
	],
	server: {
		port: 3002,
		open: false,
	},
});
