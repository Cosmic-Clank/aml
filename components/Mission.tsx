import React from "react";
import SectionContainer from "./ui/SectionContainer";
import Heading from "./ui/Heading";

const Mission = () => {
	return (
		<SectionContainer className='bg-white max-w-none w-full'>
			<div className='max-w-7xl'>
				<Heading className='items-end' title='Mission' subtitle='Privacy, space and comfort in perfect harmony.' />
				<div className='flex flex-col md:flex-row items-center gap-8 max-w-7xl text-gray-600'>
					<div className='flex flex-col gap-8'>
						<p className='max-w-2xl text-lg opacity-80 '>Our vision is to be the leading landscaping and maintenance company in the UAE, providing quality services to our clients and ensuring their satisfaction.</p>
						<p className='max-w-2xl text-lg opacity-80'>We aim to be the most reliable and trustworthy company in the industry, providing exceptional services to our clients.</p>
					</div>
					<div className='flex flex-col gap-8'>
						<p className='max-w-2xl text-lg opacity-80'>Our vision is to be the leading landscaping and maintenance company in the UAE, providing quality services to our clients and ensuring their satisfaction.</p>
						<p className='max-w-2xl text-lg opacity-80'>We aim to be the most reliable and trustworthy company in the industry, providing exceptional services to our clients.</p>
					</div>
				</div>
			</div>
		</SectionContainer>
	);
};

export default Mission;
