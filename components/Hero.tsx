"use client";
import React, { useEffect, useRef, useState } from "react";
import SectionContainer from "./ui/SectionContainer";
import { Niramit } from "next/font/google";
import SocialIcons from "./ui/SocialIcons";
import Lenis from "lenis";
import ImageGallery from "react-image-gallery";
import { cn } from "@/lib/utils";
const font = Niramit({ subsets: ["latin"], weight: "400" });

const Hero = () => {
	useEffect(() => {
		const lenis = new Lenis();
		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	}, []);
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex: number) => {
		setIndex(selectedIndex);
	};
	return (
		<SectionContainer className={cn(`relative w-full lg:h-[70vh] flex flex-col justify-center items-center pt-0`, font.className)}>
			<div className='flex flex-col lg:flex-row gap-12'>
				<div className='flex flex-col justify-end gap-12 max-w-3xl'>
					<div className='tracking-widest space-y-6'>
						{/* <p className='text-green font-semibold text-xl'>LOLAT</p> */}
						<h1 className='text-green font-semibold text-4xl'>AL MADINA LANDSCAPE</h1>
						{/* <p className='text-green font-semibold text-xl'>SERVICES</p> */}
					</div>
					<div className='text-green tracking-widest font-semibold'>SERVING THE EVER-EVOLVING CITY OF DUBAI SINCE MORE THAN A DECADE COVERING ALL AREAS OF LANDSCAPING SERVICES FROM COMPLETE MAKEOVERS TO MAINTAINING COMMERCIAL OR INDIVIDUAL LANDSCAPES.</div>
					<SocialIcons className='justify-start text-green' />
				</div>
				<div className='rounded-3xl overflow-hidden'>
					<ImageGallery showBullets autoPlay showFullscreenButton={false} showPlayButton={false} showNav={false} items={images} />
				</div>
			</div>
		</SectionContainer>
	);
};

const images = [
	{
		original: "/images/hero/hero-4.jpg",
	},
	{
		original: "/images/hero/hero-4.jpg",
	},
	{
		original: "/images/hero/hero-4.jpg",
	},
];
export default Hero;
