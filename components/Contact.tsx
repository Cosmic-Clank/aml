"use client";
import React from "react";
import SectionContainer from "./ui/SectionContainer";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

import SocialIcons from "./ui/SocialIcons";
import Button from "@/components/ui/ButtonCustom";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import Link from "next/link";
import Heading from "./ui/Heading";

const Contact = () => {
	return (
		<SectionContainer id='contact' className='w-full max-w-none'>
			<Heading title='Contact Us' />
			<div className='flex flex-col lg:flex-row justify-center gap-40 w-full'>
				{/* Contact Info Section */}
				<div className='flex flex-col gap-6'>
					<iframe className='rounded-2xl w-full' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.7592215406694!2d55.384523400000006!3d25.278683899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6108f4d41dfb%3A0xabd10ab959eca4f6!2sLoloat%20Al%20MadenaTechnical%20Services%20LLC!5e0!3m2!1sen!2sae!4v1722882959371!5m2!1sen!2sae' width='450' height='350' loading='lazy' />
					<div className='flex flex-col text-center lg:text-left'>
						<h2 className='text-lg font-semibold text-black uppercase'>Address</h2>
						<span className='flex flex-row gap-2 items-center justify-center lg:justify-start'>
							<FaLocationDot className='text-black' />
							<Link href='https://maps.app.goo.gl/QMPHJ6wPBszCityF8' className='text-base text-black hover:text-green transition-colors duration-300'>
								Al Qusais, Damascus street, Naseriya Building, 117
							</Link>
						</span>
					</div>
					<div className='flex flex-col text-center lg:text-left'>
						<h2 className='text-lg font-semibold text-black uppercase'>Customer Inquiries</h2>
						<span className='flex flex-row gap-2 items-center justify-center lg:justify-start'>
							<p className='text-base text-black'>All |</p>
							<IoCall className='text-black' />
							<Link href='tel:+971558476162' className='text-base text-black hover:text-green transition-colors duration-300'>
								+971558476162
							</Link>
						</span>
						<span className='flex flex-row gap-2 items-center justify-center lg:justify-start'>
							<p className='text-base text-black'>Ahmad |</p>
							<IoCall className='text-black' />
							<Link href='tel:+971552782684' className='text-base text-black hover:text-green transition-colors duration-300'>
								+971585675644
							</Link>
						</span>
					</div>
					<div className='flex flex-col text-center lg:text-left'>
						<h2 className='text-lg font-semibold text-black uppercase'>Email</h2>
						<span className='flex flex-row gap-2 items-center justify-center lg:justify-start'>
							<MdEmail className='text-black' />
							<Link href='mailto:info@madinalandscape.com' className='text-base text-black hover:text-green transition-colors duration-300'>
								info@madinalandscape.com
							</Link>
						</span>
					</div>
				</div>

				{/* Contact Form Section */}
				<div className='flex flex-col'>
					<p className='text-lg text-center text-black uppercase mb-8'>Leave us a message</p>
					<form action='/' method='POST' className='space-y-6 lg:w-[30rem]'>
						<Input type='text' name='name' placeholder='Name' required />
						<Input type='email' name='email' placeholder='Email' required />
						<Input type='text' name='mobile' placeholder='Mobile' required />
						<Input type='text' name='subject' placeholder='Subject' required />
						<Textarea name='message' placeholder='Message' required />
						<Button className='w-full' text='SEND MESSAGE' type='submit' />
					</form>
					<SocialIcons className='text-green' />
				</div>
			</div>
		</SectionContainer>
	);
};

export default Contact;
