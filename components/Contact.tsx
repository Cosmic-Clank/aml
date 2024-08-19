"use client";
import React from "react";
import SectionContainer from "./ui/SectionContainer";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

import SocialIcons from "./ui/SocialIcons";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import Button from "@/components/ui/ButtonCustom";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import Link from "next/link";
import Heading from "./ui/Heading";

const formSchema = z.object({
	name: z.string().min(2).max(50),
	email: z.string().email().min(2).max(50),
	mobile: z.string().min(2).max(50),
	subject: z.string().min(2).max(50),
	message: z.string().min(2).max(200),
});

const Contact = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	});
	return (
		<SectionContainer className='w-full max-w-none'>
			<Heading title='Contact Us' />
			<div className='flex flex-col lg:flex-row justify-center gap-40 w-full'>
				<div className='flex flex-col gap-6'>
					<iframe className='rounded-2xl w-full' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.7592215406694!2d55.384523400000006!3d25.278683899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6108f4d41dfb%3A0xabd10ab959eca4f6!2sLoloat%20Al%20MadenaTechnical%20Services%20LLC!5e0!3m2!1sen!2sae!4v1722882959371!5m2!1sen!2sae' width='450' height='350' loading='lazy' />
					<div className='flex flex-col text-center lg:text-left'>
						<h2 className='text-lg font-semibold text-black uppercase'>Address</h2>
						<span className='flex flex-row gap-2 items-center justify-center lg:justify-start'>
							<FaLocationDot className='text-black' />
							<Link href={"https://www.google.com/maps/place/Loloat+Al+MadenaTechnical+Services+LLC/@25.2786839,55.3845234,17z/data=!3m1!4b1!4m5!3m4!1s0x3e5f6108f4d41dfb:0xabd10ab959eca4f6!8m2!3d25.2786839!4d55.3845234?utm_source=mstt_1&g_ep=CAESBzExLjM4LjIYACD___________8BKgA%3D&coh=164777&entry=tt&shorturl=1"} className='text-base text-black hover:text-green transition-colors duration-300'>
								Al Qusais, Damascus street, Naseriya Building, 117
							</Link>
						</span>
					</div>
					<div className='flex flex-col text-center lg:text-left'>
						<h2 className='text-lg font-semibold text-black uppercase'>Customer Inquiries</h2>
						<span className='flex flex-row gap-2 items-center justify-center lg:justify-start'>
							<p className='text-base text-black'>All |</p>
							<IoCall className='text-black' />
							<Link href={"tel:+971558476162"} className='text-base text-black hover:text-green transition-colors duration-300'>
								+971558476162
							</Link>
						</span>
						<span className='flex flex-row gap-2 items-center justify-center lg:justify-start'>
							<p className='text-base text-black'>Ahmad |</p>
							<IoCall className='text-black' />
							<Link href={"tel:+971585675644"} className='text-base text-black hover:text-green transition-colors duration-300'>
								+971585675644
							</Link>
						</span>
					</div>
					<div className='flex flex-col text-center lg:text-left'>
						<h2 className='text-lg font-semibold text-black uppercase'>Email</h2>
						<span className='flex flex-row gap-2 items-center justify-center lg:justify-start'>
							<MdEmail className='text-black' />
							<Link href={"mailto:info@madinalandscape.com"} className='text-base text-black hover:text-green transition-colors duration-300'>
								info@madinalandscape.com
							</Link>
						</span>
					</div>
				</div>
				<div className='flex flex-col'>
					<p className='text-lg text-center text-black uppercase mb-8'>Leave us a message</p>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 lg:w-[30rem]'>
							<FormField
								control={form.control}
								name='name'
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input placeholder='Name' {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='email'
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input placeholder='Email' {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='mobile'
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input placeholder='Mobile' {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='subject'
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input placeholder='Subject' {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='message'
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Textarea placeholder='Message' {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button className='w-full' text='SEND MESSAGE' type='submit' />
						</form>
					</Form>
					<SocialIcons className='text-green' />
				</div>
			</div>
		</SectionContainer>
	);
};

function onSubmit(values: z.infer<typeof formSchema>) {
	// Do something with the form values.
	// ✅ This will be type-safe and validated.
	console.log(values);
}

export default Contact;
