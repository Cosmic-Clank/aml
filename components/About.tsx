import React from "react";
import SectionContainer from "./ui/SectionContainer";
import Image from "next/image";
import Heading from "./ui/Heading";
import Button from "./ui/ButtonCustom";

const grid_images = ["/images/about1.jpg", "/images/about2.jpg", "/images/about3.jpg", "/images/about4.jpg"];

const About = () => {
	return (
		<SectionContainer className='flex flex-col justify-center items-center gap-8 bg-[#f6f6f6]'>
			<Heading title='About' />
			<div className='flex flex-col-reverse md:flex-row justify-between items-center gap-16'>
				<div className='grid grid-cols-2 gap-10 min-w-96 min-h-96'>
					{grid_images.map((image, index) => (
						<Image key={index} className='rounded-2xl shadow-harsh' src={image} alt='About' width={200} height={200} />
					))}
				</div>
				<div className='flex flex-col text-gray-600 text-lg opacity-80 items-start'>
					<p className='mt-4'>Our company launched operations more than a decade ago in the ever-evolving emirate of Dubai. We commenced business in the field of Landscaping services, technical / handymen services, community maintenance, and building maintenance.</p>
					<p className='mt-4'>Our team at am landscape has served different villa communities including individual villas in the UAE. We have provided our quality services to look after their hard and soft scape on annual basis, designing landscapes and turning their gardens into dreamlands.</p>
					<p className='mt-4'>We will go to any length to achieve the landscape you envisioned. Our systemized care and maintenance programs ensure that it remains in outstanding condition.</p>
					<p className='mt-4'>That’s our promise!</p>
					<Button className='mt-10' text='View All Services' />
				</div>
			</div>
		</SectionContainer>
	);
};

export default About;
