import About from "@/components/About";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Navbar from "@/components/Navbar";
import Numbers from "@/components/Numbers";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import Vision from "@/components/Vision";
import { Open_Sans } from "next/font/google";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Instagram from "@/components/Instagram";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Projects from "@/components/Projects";

const font = Open_Sans({ subsets: ["latin"] });

export default function Home() {
	return (
		<main className={`flex flex-col items-center justify-center bg-zinc-100 overflow-hidden ${font.className}`}>
			<Navbar />
			<Hero />
			<About />
			<Numbers />
			<Vision />
			<Mission />
			<Services />
			<Clients />
			<Gallery />
			<Projects />
			<Testimonials />
			<Instagram />
			<CTA />
			<Contact />
			<Footer />
		</main>
	);
}
