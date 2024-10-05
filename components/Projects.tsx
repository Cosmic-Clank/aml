import React from "react";
import SectionContainer from "./ui/SectionContainer";
import Heading from "./ui/Heading";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
	return (
		<SectionContainer id='projects'>
			<Heading title='Projects' />
			<div className='flex flex-wrap gap-x-4 gap-y-6 justify-center items-center mb-12 '>
				{itemData.map((item) => (
					<Link href={`/projects/${item.category}`} key={item.title} className='w-96'>
						<div className='relative'>
							<div className='relative rounded-lg overflow-hidden shadow-2xl aspect-video'>
								<Image width={500} height={500} src={item.image} alt={item.title} className='w-full h-full object-cover transition-transform hover:scale-125' />
							</div>
							<div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity hover:opacity-100'>{/* <h3 className='text-white text-lg font-bold'>{item.title}</h3> */}</div>
						</div>
						<h3 className='text-sm tracking-wide mt-4'>{item.title}</h3>
					</Link>
				))}
			</div>
		</SectionContainer>
	);
};
const itemData = [
	{
		category: "a",
		image: "/images/projects/A1.jpg",
		title: "Complete Garden Makeover",
	},
	{
		category: "b",
		image: "/images/projects/B1.jpg",
		title: "Plantation Project For Villa Community",
	},
	{
		category: "c",
		image: "/images/projects/C1.jpg",
		title: "Dubai Festival City Mall - New Extension",
	},
	{
		category: "d",
		image: "/images/projects/D1.jpg",
		title: "Resort Landscape Design & Build Project",
	},
	{
		category: "e",
		image: "/images/projects/E1.jpg",
		title: "Children Play Areas For Villa Community",
	},
	{
		category: "f",
		image: "/images/projects/F1.jpg",
		title: "Complete Garden Makeover",
	},
];

export default Projects;
