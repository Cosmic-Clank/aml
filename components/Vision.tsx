import React from "react";
import SectionContainer from "./ui/SectionContainer";
import Heading from "./ui/Heading";

const Vision = () => {
	return (
		<SectionContainer className=''>
			<Heading title='Vision' />
			<div className='flex flex-col items-center gap-8'>
				<p className='text-center max-w-2xl text-gray-600 text-lg opacity-80'>Our vision is to be the leading landscaping and maintenance company in the UAE, providing quality services to our clients and ensuring their satisfaction.</p>
				<p className='text-center max-w-2xl text-gray-600 text-lg opacity-80'>We aim to be the most reliable and trustworthy company in the industry, providing exceptional services to our clients.</p>
			</div>
		</SectionContainer>
	);
};

export default Vision;
