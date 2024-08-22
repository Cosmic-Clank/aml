import React from "react";
import SectionContainer from "./ui/SectionContainer";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Image from "next/image";
import Link from "next/link";
import Heading from "./ui/Heading";

function srcset(image: string, size: number, rows = 1, cols = 1) {
	return {
		src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
		srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
	};
}

const Gallery = () => {
	return (
		<SectionContainer id='gallery' className='max-w-none flex justify-center items-center px-0 bg-white'>
			{/* <Heading title='Gallery' /> */}
			<div className='w-full lg:block hidden'>
				<ImageList className='overflow-hidden' variant='quilted' cols={8} rowHeight={240} gap={0}>
					{itemData.map((item) => (
						<ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
							<Link href={item.img} className='w-full h-full'>
								<Image className='w-full h-full object-cover transition-transform hover:scale-95' width={1000} height={1000} {...srcset(item.img, 240, item.rows, item.cols)} alt={item.title} />
							</Link>
						</ImageListItem>
					))}
				</ImageList>
			</div>
			<div className='block lg:hidden'>
				<ImageList className='overflow-hidden' variant='quilted' cols={6} rowHeight={121} gap={0}>
					{itemData.map((item) => (
						<ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
							<Link href={item.img} className='w-full h-full'>
								<Image className='w-full h-full object-cover transition-transform' width={500} height={500} {...srcset(item.img, 121, item.rows, item.cols)} alt={item.title} />
							</Link>
						</ImageListItem>
					))}
				</ImageList>
			</div>
		</SectionContainer>
	);
};

const itemData = [
	{
		img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
		title: "Breakfast",
		rows: 2,
		cols: 2,
	},
	{
		img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
		title: "Burger",
	},
	{
		img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
		title: "Camera",
	},
	{
		img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
		title: "Coffee",
		cols: 2,
	},
	{
		img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
		title: "Hats",
		cols: 2,
	},
	{
		img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
		title: "Honey",
		author: "@arwinneil",
		rows: 2,
		cols: 2,
	},
	{
		img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
		title: "Basketball",
	},
	{
		img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
		title: "Fern",
	},
	{
		img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
		title: "Mushrooms",
		rows: 2,
		cols: 2,
	},
	{
		img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
		title: "Tomato basil",
	},
	{
		img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
		title: "Sea star",
	},
	{
		img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
		title: "Bike",
		cols: 2,
	},
	{
		img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
		title: "Breakfast",
		rows: 2,
		cols: 2,
	},
	{
		img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
		title: "Burger",
	},
	{
		img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
		title: "Camera",
	},
	{
		img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
		title: "Coffee",
		cols: 2,
	},
	{
		img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
		title: "Hats",
		cols: 2,
	},
	{
		img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
		title: "Honey",
		author: "@arwinneil",
		rows: 2,
		cols: 2,
	},
	{
		img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
		title: "Basketball",
	},
	{
		img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
		title: "Fern",
	},
	{
		img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
		title: "Mushrooms",
		rows: 2,
		cols: 2,
	},
	{
		img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
		title: "Tomato basil",
	},
	{
		img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
		title: "Sea star",
	},
	{
		img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
		title: "Bike",
		cols: 2,
	},
];

export default Gallery;
