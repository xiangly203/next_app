import { title } from "@/components/layout/primitives";
import {auth} from "../../../auth";


export default async function AboutPage() {
	const session = await auth()
	// @ts-ignore
	return (
		<div>
			<h1 className={title()}>About</h1>
			<p>Welcome {session?.token}!</p>
		</div>
	);
}
