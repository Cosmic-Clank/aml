import React from "react";
import SectionContainer from "./ui/SectionContainer";
import Heading from "./ui/Heading";
import Image from "next/image";
import SocialIcons from "./ui/SocialIcons";

const Instagram = () => {
	return (
		<SectionContainer className='w-full bg-white max-w-none px-0'>
			<Heading title='Follow Us' className='text-green' />
			<div className='hidden md:block'>
				<Image src='/images/instagram-page-bg-desktop.jpg' alt='Instagram' width={1920} height={1080} className='' />
			</div>
			<div className='block md:hidden'>
				<Image src='/images/instagram-page-bg-mobile.jpg' alt='Instagram' width={1920} height={1080} className='' />
			</div>
			<SocialIcons className='text-green' />
		</SectionContainer>
	);
};

export default Instagram;
