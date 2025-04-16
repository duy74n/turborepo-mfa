import { Suspense, lazy } from "react";

// @ts-ignore
const RemoteRsBuild = lazy(() => import("remote_rsbuild/app"));

export default function Page() {
	return (
		<Suspense>
			<RemoteRsBuild />
		</Suspense>
	);
}
