import React from "react";
import SectionContainer from "./ui/SectionContainer";
import Button from "./ui/ButtonCustom";

const CTA = () => {
	return (
		<SectionContainer className='w-screen h-96 max-w-none bg-green'>
			<div className='flex flex-col items-center justify-center space-y-10'>
				<h2 className='text-sm text-white uppercase tracking-widest text-center'>Have a project in mind? Schedule a consult</h2>
			</div>
			<Button text='Call Now' className='px-6 py-4 rounded-none bg-opacity-0 border-white text-white hover:border-opacity-50 hover:text-opacity-50 hover:bg-opacity-0' />
		</SectionContainer>
	);
};

export default CTA;
