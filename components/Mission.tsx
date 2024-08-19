import React from "react";
import SectionContainer from "./ui/SectionContainer";
import Heading from "./ui/Heading";
import Image from "next/image";

const Vision = () => {
	return (
		<SectionContainer className='bg-green max-w-none w-full'>
			<div className='absolute w-96 top-0 lg:w-[40rem] left-0 scale-x-[-1] rotate-[130deg] opacity-10'>
				<Image src='/images/logos/leaf.png' alt='Vision' width={1920} height={1080} layout='responsive' />
			</div>
			<div className='max-w-7xl z-10'>
				<h2 className=' text-7xl mb-4 font-semibold	text-white text-right'>Mission</h2>
				<p className='text-lg mb-4 font-semibold text-white text-right'>Privacy space comfort in perfect harmony</p>
				<div className='flex flex-col md:flex-row items-center gap-8 max-w-7xl text-gray-100 font-semibold'>
					<div className='flex flex-col gap-8'>
						<p className='max-w-2xl text-lg opacity-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iure repudiandae impedit, doloribus assumenda ex error iusto, cupiditate provident quisquam libero omnis quos blanditiis placeat est, architecto similique temporibus nemo numquam quia aut atque. Labore, aut! At aut odio, eos natus doloremque repellat nostrum, nemo repellendus, sint dolor quibusdam ea.</p>
						<p className='max-w-2xl text-lg opacity-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iure repudiandae impedit, doloribus assumenda ex error iusto, cupiditate provident quisquam libero omnis quos blanditiis placeat est, architecto similique temporibus nemo numquam quia aut atque. Labore, aut! At aut odio, eos natus doloremque repellat nostrum, nemo repellendus, sint dolor quibusdam ea.</p>
					</div>
					<div className='flex flex-col gap-8'>
						<p className='max-w-2xl text-lg opacity-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iure repudiandae impedit, doloribus assumenda ex error iusto, cupiditate provident quisquam libero omnis quos blanditiis placeat est, architecto similique temporibus nemo numquam quia aut atque. Labore, aut! At aut odio, eos natus doloremque repellat nostrum, nemo repellendus, sint dolor quibusdam ea.</p>
						<p className='max-w-2xl text-lg opacity-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iure repudiandae impedit, doloribus assumenda ex error iusto, cupiditate provident quisquam libero omnis quos blanditiis placeat est, architecto similique temporibus nemo numquam quia aut atque. Labore, aut! At aut odio, eos natus doloremque repellat nostrum, nemo repellendus, sint dolor quibusdam ea.</p>
					</div>
				</div>
			</div>
		</SectionContainer>
	);
};

export default Vision;
