"use client";

import Navbar from "@/components/Navbar";

import { Alata } from "next/font/google";

import Footer from "@/components/Footer";

import WhatsappWidget from "@/components/WhatsappWidget";
import Link from "next/link";
import Image from "next/image";
import Heading from "@/components/ui/Heading";
import SectionContainer from "@/components/ui/SectionContainer";

const font = Alata({
	subsets: ["latin"],
	weight: "400",
});

type ItemDataType = {
	[key: string]: { image: string; title: string }[];
};

const itemData: ItemDataType = {
	a: [
		{
			image: "/images/projects/A1.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/A2.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/A3.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/A4.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/A5.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/A6.jpg",
			title: "Breakfast",
		},
	],
	b: [
		{
			image: "/images/projects/B1.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/B2.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/B3.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/B4.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/B5.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/B6.jpg",
			title: "Breakfast",
		},
	],
	c: [
		{
			image: "/images/projects/C1.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/C2.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/C3.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/C4.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/C5.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/C6.jpg",
			title: "Breakfast",
		},
	],
	d: [
		{
			image: "/images/projects/D1.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/D2.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/D3.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/D4.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/D5.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/D6.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/D7.jpg",
			title: "Breakfast",
		},
	],
	e: [
		{
			image: "/images/projects/E1.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/E2.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/E3.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/E4.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/E5.jpg",
			title: "Breakfast",
		},
	],
	f: [
		{
			image: "/images/projects/F1.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/F2.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/F3.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/F4.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/F5.jpg",
			title: "Breakfast",
		},
	],
};

export default function Home({ params }: { params: { id: string } }) {
	return (
		<main className={`flex flex-col items-center justify-center bg-zinc-100 overflow-hidden ${font.className}`}>
			<Navbar />
			<br />
			<br />
			<br />
			<SectionContainer>
				<Heading title={"Projects"} />
				<div className='relative rounded-lg overflow-hidden shadow-2xl aspect-video w-full mb-12'>
					<Image width={1280} height={720} src={`/images/projects/${params.id.toUpperCase()}1.jpg`} alt={"Display image"} className='w-full h-full object-cover transition-transform hover:scale-125' />
				</div>
				<p className='text-center text-lg font-semibold text-zinc-900 mb-12'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, dolor consequuntur, sequi mollitia sapiente eum ducimus eligendi commodi asperiores illum nobis, assumenda maiores autem at? Magni asperiores officiis cupiditate natus, est cum!</p>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center w-full'>
					{itemData[params.id].map((item) => (
						<div key={item.title} className='flex justify-center items-center'>
							<Link href={item.image} className='relative'>
								<div className='relative rounded-lg overflow-hidden shadow-2xl aspect-video'>
									<Image width={800} height={800} src={item.image} alt={item.title} className='w-full h-full object-cover transition-transform hover:scale-125' />
								</div>
							</Link>
						</div>
					))}
				</div>
			</SectionContainer>

			<Footer />

			<WhatsappWidget />
		</main>
	);
}
