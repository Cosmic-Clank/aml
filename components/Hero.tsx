"use client";
import React, { useEffect, useRef, useState } from "react";
import SectionContainer from "./ui/SectionContainer";
import { Niramit } from "next/font/google";
import SocialIcons from "./ui/SocialIcons";
import Lenis from "lenis";
import ImageGallery from "react-image-gallery";
import { cn } from "@/lib/utils";

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
		<SectionContainer id='home' className={cn(`relative w-full flex flex-col justify-center items-center bg-green max-w-none pt-60`)}>
			<div className='flex flex-col lg:flex-row gap-12 max-w-7xl'>
				<div className='flex flex-col justify-center gap-12 max-w-3xl'>
					<p className='text-white text-xl tracking-widest'>15 YEARS IN DUBAI</p>
					<div className='tracking-widest space-y-6'>
						<h1 className='text-white font-semibold text-4xl tracking-widest'>AL MADINA LANDSCAPE</h1>
						{/* <p className='text-green font-semibold text-xl'>SERVICES</p> */}
					</div>
					<p className='text-white tracking-widest'>SERVING THE EVER-EVOLVING CITY OF DUBAI SINCE MORE THAN A DECADE COVERING ALL AREAS OF LANDSCAPING SERVICES FROM COMPLETE MAKEOVERS TO MAINTAINING COMMERCIAL OR INDIVIDUAL LANDSCAPES.</p>
					<SocialIcons className='justify-start text-white' />
				</div>
				<div className='rounded-3xl overflow-hidden shadow-harsh'>
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
