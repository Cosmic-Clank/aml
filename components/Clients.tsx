import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import SectionContainer from "./ui/SectionContainer";
import Heading from "./ui/Heading";
import Image from "next/image";

export default function Clients() {
	return (
		<SectionContainer className='w-full bg-white max-w-none'>
			<Heading title='Our Clients' subtitle='We are Providing our services to the following companies and our clients in different villa communities in Dubai.' />
			<Carousel
				opts={{
					align: "start",
				}}
				className='w-full max-w-7xl'>
				<CarouselContent className='w-full'>
					{Array.from({ length: 20 }).map((_, index) => (
						<CarouselItem key={index} className='md:basis-1/2 lg:basis-1/5 flex justify-center items-center w-full'>
							<div className='p-1'>
								<Card className='border-none rounded-none'>
									<CardContent className='flex items-center justify-center p-0'>
										<Image className='w-auto h-20' alt='logo' src={`/images/logos/${index + 1}.png`} width={300} height={300} />
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</SectionContainer>
	);
}
