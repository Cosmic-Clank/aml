import React from "react";
import SectionContainer from "./ui/SectionContainer";
import Heading from "./ui/Heading";
import Image from "next/image";

const Projects = () => {
	return (
		<SectionContainer>
			<Heading title='Projects' />
			<div className='flex flex-wrap gap-x-4 gap-y-6 justify-center items-center mb-12'>
				{itemData.map((item) => (
					<div key={item.title} className='w-96'>
						<div className='relative rounded-lg overflow-hidden'>
							<Image width={500} height={500} src={item.image} alt={item.title} className='w-full h-full object-cover transition-transform hover:scale-125' />
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
		image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
		title: "Breakfast",
	},
	{
		image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
		title: "Breakfast",
	},
	{
		image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
		title: "Breakfast",
	},
	{
		image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
		title: "Breakfast",
	},
	{
		image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
		title: "Breakfast",
	},
	{
		image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
		title: "Breakfast",
	},
];

export default Projects;
