"use client";
import React, { useEffect, useRef } from "react";
import SectionContainer from "./ui/SectionContainer";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ParallaxImage from "./ui/ParallaxImage";
import SimpleParallax from "simple-parallax-js";
import { Niramit } from "next/font/google";
import Button from "./ui/ButtonCustom";
import SocialIcons from "./ui/SocialIcons";
import Lenis from "lenis";

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
		<div className='relative w-full h-[70vh] flex flex-col justify-center items-center'>
			<SimpleParallax orientation='down' scale={1.5}>
				<Image className='relative w-screen h-[70vh] object-cover' src='/images/hero.jpg' alt='image' width={2000} height={2000} />
			</SimpleParallax>
			<div className='absolute w-full h-full bg-black opacity-30'></div>

			<SectionContainer className='absolute z-10 w-screen'>
				<div className={`flex flex-col items-center justify-center w-full h-full text-center gap-6 ${font.className}`}>
					<p className='text-base md:text-xl text-white'>Experienced land scaping company in Dubai!</p>
					<h1 className='text-4xl md:text-6xl font-bold text-white'>Al Madena Landscape</h1>
					<p className='text-base md:text-xl text-white'>Established more than a decade ago in Dubai, Al Madena Landscape is pioneer & leading specialist in all aspects of landscape design, landscape construction and garden maintenance services for domestic, commercial, residential requirements. to serve you the best & quality services.</p>
					<Button className='uppercase' text='Call Now' />
					<SocialIcons className='text-white' />
				</div>
			</SectionContainer>
		</div>
	);
};

export default Hero;
