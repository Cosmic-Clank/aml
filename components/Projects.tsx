import React from "react";
import SectionContainer from "./ui/SectionContainer";
import Heading from "./ui/Heading";
import Image from "next/image";

const Projects = () => {
	return (
		<SectionContainer id='projects'>
			<Heading title='Projects' />
			<div className='flex flex-wrap gap-x-4 gap-y-6 justify-center items-center mb-12 '>
				{itemData.map((item) => (
					<div key={item.title} className='w-96'>
						<div className='relative'>
							<div className='relative rounded-lg overflow-hidden shadow-2xl aspect-video'>
								<Image width={500} height={500} src={item.image} alt={item.title} className='w-full h-full object-cover transition-transform hover:scale-125' />
							</div>
							<div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity hover:opacity-100'>
								<h3 className='text-white text-lg font-bold'>{item.title}</h3>
							</div>
						</div>
						<h3 className='text-sm tracking-wide mt-4'>{item.title}</h3>
					</div>
				))}
			</div>
		</SectionContainer>
	);
};
const itemData = [
	{
		image: "/images/projects/1.jpg",
		title: "Breakfast",
	},
	{
		image: "/images/projects/2.jpg",
		title: "Breakfast",
	},
	{
		image: "/images/projects/3.jpg",
		title: "Breakfast",
	},
	{
		image: "/images/projects/4.jpg",
		title: "Breakfast",
	},
	{
		image: "/images/projects/5.jpg",
		title: "Breakfast",
	},
	{
		image: "/images/projects/6.jpg",
		title: "Breakfast",
	},
	{
		image: "/images/projects/7.jpg",
		title: "Breakfast",
	},
	{
		image: "/images/projects/8.jpg",
		title: "Breakfast",
	},
	{
		image: "/images/projects/9.jpg",
		title: "Breakfast",
	},
	{
		image: "/images/projects/10.jpg",
		title: "Breakfast",
	},
	{
		image: "/images/projects/11.jpg",
		title: "Breakfast",
	},
	{
		image: "/images/projects/12.jpg",
		title: "Breakfast",
	},
	{
		image: "/images/projects/13.jpg",
		title: "Breakfast",
	},
	{
		image: "/images/projects/14.jpg",
		title: "Breakfast",
	},
	{
		image: "/images/projects/15.jpg",
		title: "Breakfast",
	},
	{
		image: "/images/projects/16.jpg",
		title: "Breakfast",
	},
	{
		image: "/images/projects/17.jpg",
		title: "Breakfast",
	},
	{
		image: "/images/projects/18.jpg",
		title: "Breakfast",
	},
	{
		image: "/images/projects/19.jpg",
		title: "Breakfast",
	},
	{
		image: "/images/projects/20.jpg",
		title: "Breakfast",
	},
	{
		image: "/images/projects/21.jpg",
		title: "Breakfast",
	},
	{
		image: "/images/projects/22.jpg",
		title: "Breakfast",
	},
	{
		image: "/images/projects/23.jpg",
		title: "Breakfast",
	},
	{
		image: "/images/projects/24.jpg",
		title: "Breakfast",
	},
	{
		image: "/images/projects/25.jpg",
		title: "Breakfast",
	},
	{
		image: "/images/projects/26.jpg",
		title: "Breakfast",
	},
	{
		image: "/images/projects/27.jpg",
		title: "Breakfast",
	},
	{
		image: "/images/projects/28.jpg",
		title: "Breakfast",
	},
	{
		image: "/images/projects/29.jpg",
		title: "Breakfast",
	},
	{
		image: "/images/projects/30.jpg",
		title: "Breakfast",
	},
	{
		image: "/images/projects/31.jpg",
		title: "Breakfast",
	},
	{
		image: "/images/projects/32.jpg",
		title: "Breakfast",
	},
	{
		image: "/images/projects/33.jpg",
		title: "Breakfast",
	},
	{
		image: "/images/projects/34.jpg",
		title: "Breakfast",
	},
	{
		image: "/images/projects/35.jpg",
		title: "Breakfast",
	},
];

export default Projects;
