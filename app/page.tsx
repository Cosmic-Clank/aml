import About from "@/components/About";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Navbar from "@/components/Navbar";
import Numbers from "@/components/Numbers";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import Spacer from "@/components/ui/Spacer";
import Vision from "@/components/Vision";
import { Open_Sans } from "next/font/google";
import WorkGallery from "@/components/WorkGallery";

const font = Open_Sans({ subsets: ["latin"] });

export default function Home() {
	return (
		<main className={`flex flex-col items-center justify-center bg-zinc-100 ${font.className}`}>
			<Navbar />
			<Hero />
			<About />
			<Numbers />
			<Vision />
			<Mission />
			<Services />
			<Clients />
			<WorkGallery />
		</main>
	);
}
