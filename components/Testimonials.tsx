"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import SectionContainer from "./ui/SectionContainer";
import Heading from "./ui/Heading";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Testimonials() {
	return (
		<SectionContainer id='testimonials' className='w-full bg-white max-w-none bg-testimonials-bg bg-fixed px-0 py-0'>
			<div className='w-full h-full flex flex-col justify-center items-center bg-green bg-opacity-85 px-10 py-32 '>
				<Heading title='Testimonials' className='text-white' />
				<Carousel
					responsive={{
						desktop: {
							breakpoint: { max: 3000, min: 1024 },
							items: 1,
							slidesToSlide: 1, // optional, default to 1.
						},
						tablet: {
							breakpoint: { max: 1024, min: 464 },
							items: 1,
							slidesToSlide: 1, // optional, default to 1.
						},
						mobile: {
							breakpoint: { max: 464, min: 0 },
							items: 1,
							slidesToSlide: 1, // optional, default to 1.
						},
					}}
					showDots
					dotListClass='[&>*]:[&>*]:bg-gray-600 [&>*]:[&>*]:bg-opacity-50'
					arrows={false}
					autoPlay={true}
					autoPlaySpeed={2000}
					infinite={true}
					className='w-full max-w-7xl'>
					{testimonials.map((testimonial, index) => (
						<div className='p-1' key={index}>
							<Card className='bg-transparent border-none text-white'>
								<CardContent className='flex flex-col items-center justify-center p-6'>
									<div className='text-center' dangerouslySetInnerHTML={{ __html: testimonial.testimonial }}></div>
									<p className='mt-4'> - {testimonial.person}</p>
								</CardContent>
							</Card>
						</div>
					))}
				</Carousel>
			</div>
		</SectionContainer>

		// Legacy
		// <SectionContainer className='w-screen max-w-none p-0'>
		// 	<Heading title='Testimonials' />
		// 	<div className='relative w-full h-full'>
		// 		<SimpleParallax orientation='down' scale={1.5}>
		// 			<Image className='relative w-screen h-[32rem] sm:h-[28rem] md:h-96 xl:h-96 object-cover' src='/images/testimonials-bg.jpg' alt='image' width={2000} height={2000} />
		// 		</SimpleParallax>
		// 		<div className='absolute top-0 w-full h-full bg-[#5a835bd9] opacity-90'></div>
		// 		<Carousel className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl'>
		// 			<CarouselContent>
		// 				{testimonials.map((testimonial, index) => (
		// 					<CarouselItem key={index} className='w-12 sm:w-24 md:w-32 xl:w-auto h-72'>
		// 						<div className='p-1'>
		// 							<Card className='h-96 bg-transparent border-none text-white'>
		// 								<CardContent className='flex flex-col items-center justify-center p-6'>
		// 									<div className='text-center' dangerouslySetInnerHTML={{ __html: testimonial.testimonial }}></div>
		// 									<p className='mt-4'> - {testimonial.person}</p>
		// 								</CardContent>
		// 							</Card>
		// 						</div>
		// 					</CarouselItem>
		// 				))}
		// 			</CarouselContent>
		// 			<CarouselPrevious />
		// 			<CarouselNext />
		// 		</Carousel>
		// 	</div>
		// </SectionContainer>
	);
}

const testimonials = [
	{
		person: "CHARLIE AND JANELLE DUBAI",
		testimonial: '"We couldn’t be happier with Ali and his crew at <b>Al Madena Landscape</b>. His knowledge and eye for design, combined with his amazing communication, have made collaborating with him such a pleasure. He is so responsive whenever we reach out to ask him questions. He continually shows up (that’s not always easy to come by these days). He listens to what kind of plants and styles we like, and works with us to make this happen. We love our new home already, and the landscape design he has created and installed for us has taken it to another level. We cannot wait to see the completely finished project, as we are loving what he has done so far. thank you <b>AL Madena Landscape</b>! We highly recommend you and your team!"',
	},
	{
		person: "RENEE, MELVILLE, DUBAI",
		testimonial: '"Al Madena Landscape has done a fabulous job on all the projects at my home. They put together a beautiful rendering and a plan that could be phased as we work on different areas. The masonry work was top notch and the landscaping looks amazing. Their team has an incredible response time, is easy to work with and has great ideas. Highly recommended!!"',
	},
	{
		person: "JESSICA, DIX HILLS, DUBAI",
		testimonial: '"I can’t say enough good things about <b>AL Madena Landscape</b>. I feel lucky to have found him and to have had him execute my project. He helped me every step of the way which included a significant remodel of my masonry and landscaping. From the development of the design to implementation. He’s professional, super responsive, open and honest, down to earth and really easy to work with. He’s super thoughtful and extremely knowledgeable. He also itemized my entire project and offered cost saving ideas/alternatives without compromising the overall design and on his own accord."',
	},
	{
		person: "TOM, SMITHTOWN, DUBAI",
		testimonial: '"<b>AL Madena Landscape</b> is a hands-on owner and was very involved with overseeing the project. Excellent communication throughout the project and very fair pricing. 5 stars all the way!"',
	},
	{
		person: "ERIC, HAPPAUGE, DUBAI",
		testimonial: '"We had a good amount of front landscaping and masonry work done. <b>AL Madena Landscape</b> was awesome from start to finish and the team did such a great job we are now using them for weekly landscaping. Couldn\'t be any happier with the service, and we will continue to use next year."',
	},
	{
		person: "LINDA, EAST NORWICH, DUBAI",
		testimonial: '"My husband and i really enjoyed working with <b>Al Madena Landscape</b>. He is very honest and easy to work with. Their team is very talented and has a great vision. He drew up amazing plans for our backyard and front yard, from landscaping and lighting designs..."',
	},
];
