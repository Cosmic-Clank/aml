import Image from "next/image";
import React from "react";
import SocialIcons from "./ui/SocialIcons";
import Link from "next/link";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
	return (
		<footer className='relative bg-cover bg-center w-screen tracking-wide' style={{ backgroundImage: "url(/images/footer-bg.jpg)" }}>
			<div className='bg-green bg-opacity-75 p-6'>
				<div className='container mx-auto py-8 px-4 text-white'>
					<div className='flex flex-col md:flex-row md:justify-between gap-6'>
						<Image className='w-32 h-32' src='/images/logos/logo.png' alt='Logo' width={1000} height={1000} />
						<div className='mb-6 md:mb-0'>
							<div className='flex flex-col gap-6'>
								<div className='flex flex-col lg:text-left'>
									<h2 className='text-lg font-semibold text-white uppercase'>Address</h2>
									<span className='flex flex-row gap-2 justify-start text-white hover:text-green transition-colors duration-300'>
										<FaLocationDot className='mt-1' />
										<Link href={"https://www.google.com/maps/place/Loloat+Al+MadenaTechnical+Services+LLC/@25.2786839,55.3845234,17z/data=!3m1!4b1!4m5!3m4!1s0x3e5f6108f4d41dfb:0xabd10ab959eca4f6!8m2!3d25.2786839!4d55.3845234?utm_source=mstt_1&g_ep=CAESBzExLjM4LjIYACD___________8BKgA%3D&coh=164777&entry=tt&shorturl=1"} className='text-base'>
											Al Qusais, Damascus street, Naseriya Building, 117
										</Link>
									</span>
								</div>
								<div className='flex flex-col text-left'>
									<h2 className='text-lg font-semibold text-white uppercase'>Customer Inquiries</h2>
									<span className='flex flex-row gap-2 items-center justify-start text-white hover:text-green transition-colors duration-300'>
										<p className='text-base text-white'>All |</p>
										<IoCall />
										<Link href={"tel:+971558476162"} className='text-base'>
											+971558476162
										</Link>
									</span>
									<span className='flex flex-row gap-2 items-center justify-start text-white hover:text-green transition-colors duration-300'>
										<p className='text-base text-white'>Ahmad |</p>
										<IoCall />
										<Link href={"tel:+971585675644"} className='text-base'>
											+971585675644
										</Link>
									</span>
								</div>
								<div className='flex flex-col text-left'>
									<h2 className='text-lg font-semibold text-white uppercase'>Email</h2>
									<span className='flex flex-row gap-2 items-center justify-start text-white hover:text-green transition-colors duration-300'>
										<MdEmail />
										<Link href={"mailto:info@madinalandscape.com"} className='text-base  '>
											info@madinalandscape.com
										</Link>
									</span>
								</div>
							</div>
						</div>
						<div className='grid grid-cols-2 gap-4 text-sm'>
							<div className='flex flex-col gap-4'>
								<Link className='hover:text-green transition-colors duration-300' href={"/"}>
									SWIMMING POOL
								</Link>
								<Link className='hover:text-green transition-colors duration-300' href={"/"}>
									POOL MAINTENANCE
								</Link>
								<Link className='hover:text-green transition-colors duration-300' href={"/"}>
									GARDEN MAINTENANCE
								</Link>
								<Link className='hover:text-green transition-colors duration-300' href={"/"}>
									GARDEN DESIGN
								</Link>
								<Link className='hover:text-green transition-colors duration-300' href={"/"}>
									GARDEN MAKEOVER
								</Link>
								<Link className='hover:text-green transition-colors duration-300' href={"/"}>
									LANDSCAPE DESIGN
								</Link>
							</div>
							<div className='flex flex-col gap-4'>
								<Link className='hover:text-green transition-colors duration-300' href={"/"}>
									PERGOLA, GAZEBO, BBQ AREA
								</Link>
								<Link className='hover:text-green transition-colors duration-300' href={"/"}>
									HANDYMAN SERVICES
								</Link>
								<Link className='hover:text-green transition-colors duration-300' href={"/"}>
									TILING, FLOORING, PLANTATION
								</Link>
								<Link className='hover:text-green transition-colors duration-300' href={"/"}>
									CAREERS
								</Link>
								<Link className='hover:text-green transition-colors duration-300' href={"/"}>
									PRIVACY POLICY
								</Link>
								<Link className='hover:text-green transition-colors duration-300' href={"/"}>
									TERMS OF SERVICE
								</Link>
							</div>
						</div>
					</div>
					<div className='mt-8 flex justify-between items-center pt-4'>
						<SocialIcons className='m-0' />
					</div>
					<p className='text-xs text-center mt-12 text-gray-400'>&copy; {new Date().getFullYear()} Al Madena Landscape. All Rights Reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
