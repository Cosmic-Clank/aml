import React from "react";
import SectionContainer from "./ui/SectionContainer";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Image from "next/image";
import Link from "next/link";

function srcset(image: string, size: number, rows = 1, cols = 1) {
	return {
		src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
		srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
	};
}

const Gallery = () => {
	return (
		<SectionContainer id='gallery' className='max-w-none flex justify-center items-center p-0 bg-white'>
			{/* <Heading title='Gallery' /> */}
			<div className='w-full lg:block hidden'>
				<ImageList className='overflow-hidden' variant='quilted' cols={8} rowHeight={240} gap={8}>
					{itemDataDesktop.map((item) => (
						<ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
							<Link href={item.img} className='w-full h-full'>
								<Image placeholder='blur' blurDataURL='data:image/png;base64,...' quality={40} className='w-full h-full object-cover transition-transform hover:scale-95' width={400} height={400} {...srcset(item.img, 240, item.rows, item.cols)} alt={item.title} />
							</Link>
						</ImageListItem>
					))}
				</ImageList>
			</div>
			<div className='block lg:hidden'>
				<ImageList className='overflow-hidden' variant='quilted' cols={3} rowHeight={121} gap={8}>
					{itemDataMobile.map((item) => (
						<ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
							<Link href={item.img} className='w-full h-full'>
								<Image placeholder='blur' blurDataURL='data:image/png;base64,...' quality={40} className='w-full h-full object-cover transition-transform hover:scale-95' width={400} height={400} {...srcset(item.img, 121, item.rows, item.cols)} alt={item.title} />
							</Link>
						</ImageListItem>
					))}
				</ImageList>
			</div>
		</SectionContainer>
	);
};

const itemDataDesktop = [
	{
		img: `/images/gallery/1.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 2,
	},

	{
		img: `/images/gallery/2.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 1,
	},

	{
		img: `/images/gallery/3.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 2,
	},

	{
		img: `/images/gallery/4.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 2,
	},

	{
		img: `/images/gallery/5.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 1,
	},

	{
		img: `/images/gallery/6.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 2,
	},

	{
		img: `/images/gallery/7.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 1,
	},

	{
		img: `/images/gallery/8.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 2,
	},

	{
		img: `/images/gallery/9.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 2,
	},

	{
		img: `/images/gallery/10.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 2,
	},

	{
		img: `/images/gallery/11.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 3,
	},

	{
		img: `/images/gallery/12.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 2,
	},

	{
		img: `/images/gallery/13.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 2,
	},

	{
		img: `/images/gallery/14.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 1,
	},

	{
		img: `/images/gallery/15.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 2,
	},

	{
		img: `/images/gallery/16.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 1,
	},

	{
		img: `/images/gallery/17.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 2,
	},

	{
		img: `/images/gallery/18.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 2,
	},

	{
		img: `/images/gallery/19.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 2,
	},

	{
		img: `/images/gallery/20.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 1,
	},

	{
		img: `/images/gallery/21.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 2,
	},

	{
		img: `/images/gallery/22.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 2,
	},

	{
		img: `/images/gallery/23.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 2,
	},

	{
		img: `/images/gallery/24.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 1,
	},

	{
		img: `/images/gallery/25.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 1,
	},

	{
		img: `/images/gallery/26.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 2,
	},

	{
		img: `/images/gallery/27.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 1,
	},

	{
		img: `/images/gallery/28.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 1,
	},

	{
		img: `/images/gallery/29.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 3,
	},

	{
		img: `/images/gallery/30.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 2,
	},

	{
		img: `/images/gallery/31.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 1,
	},

	{
		img: `/images/gallery/32.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 1,
	},

	{
		img: `/images/gallery/33.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 1,
	},

	{
		img: `/images/gallery/34.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 1,
	},

	{
		img: `/images/gallery/35.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 1,
	},

	{
		img: `/images/gallery/36.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 1,
	},

	{
		img: `/images/gallery/37.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 2,
	},

	{
		img: `/images/gallery/38.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 1,
	},

	{
		img: `/images/gallery/39.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 1,
	},

	{
		img: `/images/gallery/40.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 1,
	},

	{
		img: `/images/gallery/41.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 2,
	},

	{
		img: `/images/gallery/42.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 2,
	},

	{
		img: `/images/gallery/43.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 2,
	},

	{
		img: `/images/gallery/44.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 1,
	},

	{
		img: `/images/gallery/45.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 1,
	},

	{
		img: `/images/gallery/46.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 2,
	},

	{
		img: `/images/gallery/47.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 2,
	},

	{
		img: `/images/gallery/48.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 2,
	},

	{
		img: `/images/gallery/49.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 2,
	},

	{
		img: `/images/gallery/50.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 1,
	},

	{
		img: `/images/gallery/51.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 1,
	},

	{
		img: `/images/gallery/52.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 2,
	},

	{
		img: `/images/gallery/53.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 2,
	},

	{
		img: `/images/gallery/54.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 2,
	},

	{
		img: `/images/gallery/55.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 1,
	},

	{
		img: `/images/gallery/56.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 2,
	},

	{
		img: `/images/gallery/57.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 2,
	},

	{
		img: `/images/gallery/58.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 2,
	},

	{
		img: `/images/gallery/59.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 1,
	},

	{
		img: `/images/gallery/60.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 3,
	},

	{
		img: `/images/gallery/61.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 2,
	},

	{
		img: `/images/gallery/62.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 2,
	},

	{
		img: `/images/gallery/63.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 1,
	},

	{
		img: `/images/gallery/64.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 1,
	},

	{
		img: `/images/gallery/65.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 2,
	},

	{
		img: `/images/gallery/66.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 2,
	},

	{
		img: `/images/gallery/67.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 1,
	},

	{
		img: `/images/gallery/68.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 1,
	},
	{
		img: `/images/gallery/69.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 2,
	},
];
const itemDataMobile = [
	{
		img: `/images/gallery/1.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 2,
	},

	{
		img: `/images/gallery/2.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 1,
	},

	{
		img: `/images/gallery/3.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 1,
	},

	{
		img: `/images/gallery/4.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 2,
	},

	{
		img: `/images/gallery/5.jpg`,
		title: "Gallery Image",
		rows: 3,
		cols: 1,
	},

	{
		img: `/images/gallery/6.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 2,
	},

	{
		img: `/images/gallery/7.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 2,
	},

	{
		img: `/images/gallery/8.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 2,
	},

	{
		img: `/images/gallery/9.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 1,
	},

	{
		img: `/images/gallery/10.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 2,
	},

	{
		img: `/images/gallery/11.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 1,
	},

	{
		img: `/images/gallery/12.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 1,
	},

	{
		img: `/images/gallery/13.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 2,
	},

	{
		img: `/images/gallery/14.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 1,
	},

	{
		img: `/images/gallery/15.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 1,
	},

	{
		img: `/images/gallery/16.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 1,
	},

	{
		img: `/images/gallery/17.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 2,
	},

	{
		img: `/images/gallery/18.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 2,
	},

	{
		img: `/images/gallery/19.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 1,
	},

	{
		img: `/images/gallery/20.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 2,
	},

	{
		img: `/images/gallery/21.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 1,
	},

	{
		img: `/images/gallery/22.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 2,
	},

	{
		img: `/images/gallery/23.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 2,
	},

	{
		img: `/images/gallery/24.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 1,
	},

	{
		img: `/images/gallery/25.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 1,
	},

	{
		img: `/images/gallery/26.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 1,
	},

	{
		img: `/images/gallery/27.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 1,
	},

	{
		img: `/images/gallery/28.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 1,
	},

	{
		img: `/images/gallery/29.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 2,
	},

	{
		img: `/images/gallery/30.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 3,
	},

	{
		img: `/images/gallery/31.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 2,
	},

	{
		img: `/images/gallery/32.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 1,
	},

	{
		img: `/images/gallery/33.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 1,
	},

	{
		img: `/images/gallery/34.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 1,
	},

	{
		img: `/images/gallery/35.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 1,
	},

	{
		img: `/images/gallery/36.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 1,
	},

	{
		img: `/images/gallery/37.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 2,
	},

	{
		img: `/images/gallery/38.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 1,
	},

	{
		img: `/images/gallery/39.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 2,
	},

	{
		img: `/images/gallery/40.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 1,
	},

	{
		img: `/images/gallery/41.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 1,
	},

	{
		img: `/images/gallery/42.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 2,
	},

	{
		img: `/images/gallery/43.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 2,
	},

	{
		img: `/images/gallery/44.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 1,
	},

	{
		img: `/images/gallery/45.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 2,
	},

	{
		img: `/images/gallery/46.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 1,
	},

	{
		img: `/images/gallery/47.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 2,
	},

	{
		img: `/images/gallery/48.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 1,
	},

	{
		img: `/images/gallery/49.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 2,
	},

	{
		img: `/images/gallery/50.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 1,
	},

	{
		img: `/images/gallery/51.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 1,
	},

	{
		img: `/images/gallery/52.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 2,
	},

	{
		img: `/images/gallery/53.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 2,
	},

	{
		img: `/images/gallery/54.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 2,
	},

	{
		img: `/images/gallery/55.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 1,
	},

	{
		img: `/images/gallery/56.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 1,
	},

	{
		img: `/images/gallery/57.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 2,
	},

	{
		img: `/images/gallery/58.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 2,
	},

	{
		img: `/images/gallery/59.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 1,
	},

	{
		img: `/images/gallery/60.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 2,
	},

	{
		img: `/images/gallery/61.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 1,
	},

	{
		img: `/images/gallery/62.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 2,
	},

	{
		img: `/images/gallery/63.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 1,
	},

	{
		img: `/images/gallery/64.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 1,
	},

	{
		img: `/images/gallery/65.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 2,
	},

	{
		img: `/images/gallery/66.jpg`,
		title: "Gallery Image",
		rows: 1,
		cols: 1,
	},

	{
		img: `/images/gallery/67.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 1,
	},

	{
		img: `/images/gallery/68.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 1,
	},
	{
		img: `/images/gallery/69.jpg`,
		title: "Gallery Image",
		rows: 2,
		cols: 1,
	},
];

export default Gallery;
