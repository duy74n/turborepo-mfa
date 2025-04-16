import { Suspense, lazy } from "react";

// @ts-ignore
const RemoteModern = lazy(() => import("remote_modern/app"));

export default function Page() {
	return (
		<Suspense>
			<RemoteModern />
		</Suspense>
	);
}
