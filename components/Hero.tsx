"use client";
import React, { useEffect, useRef } from "react";
import SectionContainer from "./ui/SectionContainer";
import Image from "next/image";
import SimpleParallax from "simple-parallax-js";
import { Niramit } from "next/font/google";
import Button from "./ui/ButtonCustom";
import SocialIcons from "./ui/SocialIcons";
import Lenis from "lenis";
import { Card, CardContent } from "./ui/card";
import Carousel from "react-multi-carousel";

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
	return (
		<SectionContainer className='relative w-full lg:h-[70vh] flex flex-col justify-center items-center pt-0'>
			<div className='flex flex-col lg:flex-row gap-12 h-full'>
				<div className='flex flex-col justify-end gap-12'>
					<div className='tracking-widest space-y-6'>
						<p className='text-green font-semibold text-xl'>LOLAT</p>
						<h1 className='text-green font-semibold text-4xl'>AL MADINA LANDSCAPE</h1>
						<p className='text-green font-semibold text-xl'>SERVICES</p>
					</div>
					<div className='text-green tracking-widest font-semibold'>SERVING THE EVER-EVOLVING CITY OF DUBAI SINCE MORE THAN A DECADE COVERING ALL AREAS OF LANDSCAPING SERVICES FROM COMPLETE MAKEOVERS TO MAINTAINING COMMERCIAL OR INDIVIDUAL LANDSCAPES.</div>
					<SocialIcons className='justify-start text-green' />
				</div>
				<div className='h-full w-full rounded-3xl overflow-hidden'>
					<Image className='h-full w-full object-cover transition-transform hover:scale-110' src='/images/hero/hero-4.jpg' alt='Hero Image' width={1000} height={1000} />
				</div>
			</div>
		</SectionContainer>
	);
};

const images = ["/images/hero/hero-1.jpg", "/images/hero/hero-2.jpg", "/images/hero/hero-3.jpg"];

export default Hero;
