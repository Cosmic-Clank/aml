import React from "react";
import SectionContainer from "./ui/SectionContainer";
import Heading from "./ui/Heading";
import Image from "next/image";

const Instagram = () => {
	return (
		<SectionContainer className='w-full bg-white max-w-none px-0'>
			<Heading title='Instagram' subtitle='Follow us on instagram to see our most recent projects in progress.' subtitleClassName='px-6' />
			<div className='hidden md:block px-8'>
				<Image src='/images/instagram-page-bg-desktop.jpg' alt='Instagram' width={1920} height={1080} className='' />
			</div>
			<div className='block md:hidden px-4'>
				<Image src='/images/instagram-page-bg-mobile.jpg' alt='Instagram' width={1920} height={1080} className='' />
			</div>
		</SectionContainer>
	);
};

export default Instagram;
