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
								<Image placeholder='blur' blurDataURL='data:image/png;base64,...' quality={40} className='w-full h-full object-cover transition-transform hover:scale-95' width={400} height={400} {...srcset(item.img, 240, item.rows, item.cols)} alt={item.title} />
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
								<Image placeholder='blur' blurDataURL='data:image/png;base64,...' quality={40} className='w-full h-full object-cover transition-transform' width={200} height={200} {...srcset(item.img, 121, item.rows, item.cols)} alt={item.title} />
							</Link>
						</ImageListItem>
					))}
				</ImageList>
			</div>
		</SectionContainer>
	);
};

const itemData = Array.from({ length: 68 }, (_, index) => ({
	img: `/images/gallery/${index + 1}.jpg`,
	title: "Gallery Image",
	rows: Math.random() > 0.5 ? 2 : 1, // 30% chance to have rows = 2
	cols: Math.random() > 0.5 ? 2 : 1, // 50% chance to have cols = 2
}));

export default Gallery;
