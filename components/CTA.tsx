import React from "react";
import SectionContainer from "./ui/SectionContainer";
import Link from "next/link";

const CTA = () => {
	return (
		<SectionContainer className='w-screen h-96 max-w-none bg-green'>
			<div className='flex flex-col items-center justify-center space-y-10'>
				<h2 className='text-sm text-white uppercase tracking-widest text-center'>Have a project in mind? Schedule a consult</h2>
			</div>
			<Link href='tel:+971585675644' className='mt-4 bg-white hover:bg-green-900 uppercase hover:text-white transition-colors duration-500 border px-6 py-4 rounded-none bg-opacity-0 border-white text-white hover:border-opacity-50 hover:text-opacity-50 hover:bg-opacity-0'>
				Call Now
			</Link>
		</SectionContainer>
	);
};

export default CTA;
