import React from "react";
import SectionContainer from "./ui/SectionContainer";
import Button from "./ui/ButtonCustom";

const CTA = () => {
	return (
		<SectionContainer className='w-screen h-96 max-w-none bg-green'>
			<div className='flex flex-col items-center justify-center space-y-10'>
				<h2 className='text-2xl font-bold text-white'>Have a project in mind? Schedule a consult</h2>
			</div>
			<Button text='Contact Us' />
		</SectionContainer>
	);
};

export default CTA;
