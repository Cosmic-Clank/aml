import About from "@/components/About";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Navbar from "@/components/Navbar";
import Numbers from "@/components/Numbers";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import Vision from "@/components/Vision";
import { Alata } from "next/font/google";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Instagram from "@/components/Instagram";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Projects from "@/components/Projects";
import WhatsappWidget from "@/components/WhatsappWidget";

const font = Alata({
	subsets: ["latin"],
	weight: "400",
});

export default function Home() {
	return (
		<main className={`flex flex-col items-center justify-center bg-zinc-100 overflow-hidden ${font.className}`}>
			<Navbar />
			<Hero />
			<About />
			<Numbers />
			<Gallery />
			<Vision />
			<Mission />
			<Services />
			<Clients />
			<Projects />
			<Testimonials />
			<Instagram />
			<CTA />
			<Contact />
			<Footer />
			<WhatsappWidget />
		</main>
	);
}
