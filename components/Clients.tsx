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
		<SectionContainer className='w-full bg-white pt-10 max-w-none px-0'>
			<Heading title='Our Clients' subtitle='We are Providing our services to the following companies and our clients in different villa communities in Dubai.' />
			<Carousel
				additionalTransfrom={0}
				arrows={false}
				autoPlay
				customTransition='all 5s linear'
				draggable={false}
				focusOnSelect={false}
				infinite
				itemClass=''
				keyBoardControl={false}
				minimumTouchDrag={80}
				renderArrowsWhenDisabled={false}
				renderButtonGroupOutside={false}
				renderDotsOutside={false}
				responsive={{
					desktop: {
						breakpoint: {
							max: 3000,
							min: 1024,
						},
						items: 4,
						partialVisibilityGutter: 40,
					},
					mobile: {
						breakpoint: {
							max: 464,
							min: 0,
						},
						items: 2,
						partialVisibilityGutter: 30,
					},
					tablet: {
						breakpoint: {
							max: 1024,
							min: 464,
						},
						items: 3,
						partialVisibilityGutter: 30,
					},
				}}
				rewind={false}
				rewindWithAnimation={false}
				rtl={false}
				showDots={false}
				sliderClass=''
				slidesToSlide={2}
				transitionDuration={1000}
				customDot={
					<CustomDot
						index={0}
						onClick={function (): void {
							throw new Error("Function not implemented.");
						}}
						active={false}
					/>
				}
				dotListClass='color-white'
				className='w-full pb-20 pt-10 px-6 shadow-none'>
				{Array.from({ length: 20 }).map((_, index) => (
					<div key={index} className=''>
						<Card className='border-none rounded-none shadow-none'>
							<CardContent className='flex items-center justify-center p-0'>
								<Image className='w-auto h-20' alt='logo' src={`/images/logos/${index + 1}.png`} width={300} height={300} />
							</CardContent>
						</Card>
					</div>
				))}
				{Array.from({ length: 20 }).map((_, index) => (
					<div key={index} className=''>
						<Card className='border-none rounded-none shadow-none'>
							<CardContent className='flex items-center justify-center p-0'>
								<Image className='w-auto h-20' alt='logo' src={`/images/logos/${index + 1}.png`} width={300} height={300} />
							</CardContent>
						</Card>
					</div>
				))}
				{Array.from({ length: 20 }).map((_, index) => (
					<div key={index} className=''>
						<Card className='border-none rounded-none shadow-none'>
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

interface CustomDotProps {
	index: number;
	onClick: () => void;
	active: boolean;
}

const CustomDot: React.FC<CustomDotProps> = ({ onClick, active }) => {
	return <button className={`inline-block mx-2 cursor-pointer w-4 h-4 rounded-full border-2 ${active ? "bg-green" : "bg-white"}`} onClick={onClick} />;
};
