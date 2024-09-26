import React from "react";
import SectionContainer from "./ui/SectionContainer";
import Heading from "./ui/Heading";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabsshadcn";
import Link from "next/link";

const Projects = () => {
	return (
		<SectionContainer id='projects' className='w-screen'>
			<Heading title='Projects' />
			<Tabs defaultValue='a' className='w-full flex items-center justify-center flex-col gap-6'>
				<TabsList>
					<TabsTrigger value='a'>A</TabsTrigger>
					<TabsTrigger value='b'>B</TabsTrigger>
					<TabsTrigger value='c'>C</TabsTrigger>
					<TabsTrigger value='d'>D</TabsTrigger>
					<TabsTrigger value='e'>E</TabsTrigger>
					<TabsTrigger value='f'>F</TabsTrigger>
				</TabsList>
				<TabsContent value='a'>
					<div className='flex flex-wrap gap-x-4 gap-y-6 justify-center items-center mb-12 w-full'>
						{itemData.a.map((item) => (
							<div key={item.title} className=''>
								<Link href={item.image} className='relative'>
									<div className='relative rounded-lg overflow-hidden shadow-2xl aspect-video w-72 sm:w-96'>
										<Image width={800} height={800} src={item.image} alt={item.title} className='w-full h-full object-cover transition-transform hover:scale-125' />
									</div>
								</Link>
							</div>
						))}
					</div>
				</TabsContent>
				<TabsContent value='b'>
					<div className='flex flex-wrap gap-x-4 gap-y-6 justify-center items-center mb-12 w-full'>
						{itemData.b.map((item) => (
							<div key={item.title} className=''>
								<Link href={item.image} className='relative'>
									<div className='relative rounded-lg overflow-hidden shadow-2xl aspect-video w-72 sm:w-96'>
										<Image width={800} height={800} src={item.image} alt={item.title} className='w-full h-full object-cover transition-transform hover:scale-125' />
									</div>
								</Link>
							</div>
						))}
					</div>
				</TabsContent>
				<TabsContent value='c'>
					<div className='flex flex-wrap gap-x-4 gap-y-6 justify-center items-center mb-12 w-full'>
						{itemData.c.map((item) => (
							<div key={item.title} className=''>
								<Link href={item.image} className='relative'>
									<div className='relative rounded-lg overflow-hidden shadow-2xl aspect-video w-72 sm:w-96'>
										<Image width={800} height={800} src={item.image} alt={item.title} className='w-full h-full object-cover transition-transform hover:scale-125' />
									</div>
								</Link>
							</div>
						))}
					</div>
				</TabsContent>
				<TabsContent value='d'>
					<div className='flex flex-wrap gap-x-4 gap-y-6 justify-center items-center mb-12 w-full'>
						{itemData.d.map((item) => (
							<div key={item.title} className=''>
								<Link href={item.image} className='relative'>
									<div className='relative rounded-lg overflow-hidden shadow-2xl aspect-video w-72 sm:w-96'>
										<Image width={800} height={800} src={item.image} alt={item.title} className='w-full h-full object-cover transition-transform hover:scale-125' />
									</div>
								</Link>
							</div>
						))}
					</div>
				</TabsContent>
				<TabsContent value='e'>
					<div className='flex flex-wrap gap-x-4 gap-y-6 justify-center items-center mb-12 w-full'>
						{itemData.e.map((item) => (
							<div key={item.title} className=''>
								<Link href={item.image} className='relative'>
									<div className='relative rounded-lg overflow-hidden shadow-2xl aspect-video w-72 sm:w-96'>
										<Image width={800} height={800} src={item.image} alt={item.title} className='w-full h-full object-cover transition-transform hover:scale-125' />
									</div>
								</Link>
							</div>
						))}
					</div>
				</TabsContent>
				<TabsContent value='f'>
					<div className='flex flex-wrap gap-x-4 gap-y-6 justify-center items-center mb-12 w-full'>
						{itemData.f.map((item) => (
							<div key={item.title} className=''>
								<Link href={item.image} className='relative'>
									<div className='relative rounded-lg overflow-hidden shadow-2xl aspect-video w-72 sm:w-96'>
										<Image width={800} height={800} src={item.image} alt={item.title} className='w-full h-full object-cover transition-transform hover:scale-125' />
									</div>
								</Link>
							</div>
						))}
					</div>
				</TabsContent>
			</Tabs>
		</SectionContainer>
	);
};
const itemData = {
	a: [
		{
			image: "/images/projects/A1.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/A2.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/A3.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/A4.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/A5.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/A6.jpg",
			title: "Breakfast",
		},
	],
	b: [
		{
			image: "/images/projects/B1.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/B2.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/B3.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/B4.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/B5.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/B6.jpg",
			title: "Breakfast",
		},
	],
	c: [
		{
			image: "/images/projects/C1.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/C2.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/C3.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/C4.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/C5.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/C6.jpg",
			title: "Breakfast",
		},
	],
	d: [
		{
			image: "/images/projects/D1.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/D2.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/D3.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/D4.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/D5.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/D6.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/D7.jpg",
			title: "Breakfast",
		},
	],
	e: [
		{
			image: "/images/projects/E1.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/E2.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/E3.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/E4.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/E5.jpg",
			title: "Breakfast",
		},
	],
	f: [
		{
			image: "/images/projects/F1.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/F2.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/F3.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/F4.jpg",
			title: "Breakfast",
		},
		{
			image: "/images/projects/F5.jpg",
			title: "Breakfast",
		},
	],
};

export default Projects;
