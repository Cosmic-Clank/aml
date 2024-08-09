"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SectionContainer from "./ui/SectionContainer";
import Heading from "./ui/Heading";
import Image from "next/image";

export default function Clients() {
	return (
		<SectionContainer className='w-full bg-white max-w-none'>
			<Heading title='Our Clients' subtitle='We are Providing our services to the following companies and our clients in different villa communities in Dubai.' />
			<Carousel
				responsive={{
					desktop: {
						breakpoint: { max: 3000, min: 1024 },
						items: 4,
						slidesToSlide: 4, // optional, default to 1.
					},
					tablet: {
						breakpoint: { max: 1024, min: 464 },
						items: 2,
						slidesToSlide: 2, // optional, default to 1.
					},
					mobile: {
						breakpoint: { max: 464, min: 0 },
						items: 1,
						slidesToSlide: 1, // optional, default to 1.
					},
				}}
				infinite={true}
				autoPlay={true}
				autoPlaySpeed={2000}
				removeArrowOnDeviceType={["tablet", "mobile"]}
				showDots
				className='w-full max-w-7xl pb-12'>
				{Array.from({ length: 20 }).map((_, index) => (
					<div key={index} className='p-1'>
						<Card className='border-none rounded-none'>
							<CardContent className='flex items-center justify-center p-0'>
								<Image className='w-auto h-20' alt='logo' src={`/images/logos/${index + 1}.png`} width={300} height={300} />
							</CardContent>
						</Card>
					</div>
				))}
			</Carousel>
		</SectionContainer>
	);
}
