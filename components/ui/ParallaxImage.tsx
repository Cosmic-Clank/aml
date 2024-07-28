"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import Lenis from "lenis";

function ParallaxImage({ image, text, className }: { image: string; text?: string; className?: string }) {
	const { scrollYProgress } = useScroll();
	const backgroundY = useTransform(scrollYProgress, [0, 1], ["0", "140%"]);

	useEffect(() => {
		const lenis = new Lenis();
		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	}, []);

	return (
		<>
			<motion.div className={cn("relative overflow-hidden w-full h-[50vh]", className)} style={{ translateY: backgroundY }}>
				<Image className='absolute bottom-0 w-full h-full object-cover' src={image} alt='Hero' width={"2000"} height={"2000"} />
			</motion.div>
			<div>
				<h1 className='uppercase text-2xl md:text-5xl lg:text-7xl font-bold tracking-widest text-center text-white'>{text}</h1>
			</div>
		</>
	);
}

export default ParallaxImage;
