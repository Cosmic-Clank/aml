"use client";

import Image from "next/image";
import { Open_Sans } from "next/font/google";
import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "./ui/ButtonCustom";
import { IoMenu } from "react-icons/io5";

const navigation = [
	{ name: "Home", href: "#", current: false },
	{ name: "About", href: "#", current: false },
	{ name: "Services", href: "#", current: false },
	{ name: "Projects", href: "#", current: false },
	{ name: "Testimonials", href: "#", current: false },
	{ name: "Contact", href: "#", current: false },
];

const font = Open_Sans({ subsets: ["latin"] });

export default function Example() {
	const [isExpanded, setIsExpanded] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	const toggleNavbar = () => {
		setIsExpanded((prev) => !prev);
	};

	const handleScroll = () => {
		setIsScrolled(window.scrollY > 50);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	});

	return (
		<header className={`fixed top-0 z-50 w-full flex justify-center items-center px-6 bg-green transition-all duration-200 py-12 ${isScrolled ? "py-6" : ""}  ${font.className}`}>
			<nav className='hidden lg:flex w-full h-full flex-row justify-between items-center max-w-screen-2xl z-50'>
				<div>
					<Link href='/' className='overflow-hidden'>
						<Image className='rounded-full' alt='Al Madena Landscape Logo' src='/images/logos/logo-2.png' width={300} height={300} />
					</Link>
				</div>
				<div className={`flex flex-row gap-10 uppercase transition-transform ${isExpanded ? "scale-100" : "scale-0"}`}>
					<ul className='flex flex-row gap-10'>
						{navigation.map((item) => (
							<li key={item.href}>
								<Link href={item.href} className='text-white hover:opacity-50'>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<button type='button' onClick={toggleNavbar} className='text-white hover:opacity-50 flex justify-center items-center text-2xl font-semibold tracking-widest gap-4'>
					MENU
					<IoMenu size={50} />
				</button>
			</nav>

			<nav className='relative lg:hidden flex w-full h-full flex-row justify-between items-center max-w-screen-xl z-50'>
				<div>
					<Link href='/' className='overflow-hidden'>
						<Image className='rounded-full' alt='Al Madena Landscape Logo' src='/images/logos/logo-2.png' width={200} height={200} />
					</Link>
				</div>
				<button type='button' onClick={toggleNavbar} className='text-white hover:opacity-50 flex justify-center items-center text-xl font-semibold tracking-widest gap-4'>
					MENU <IoMenu size={50} />
				</button>

				<div className={`fixed flex flex-col gap-20 justify-center items-center top-0 p-20 transition-transform transform bg-[#333333] h-screen text-white ${isExpanded ? "-translate-x-10" : "-translate-x-[120%]"}`}>
					{navigation.map((item) => (
						<Link key={item.href} href={item.href} className='hover:text-gray-700'>
							{item.name}
						</Link>
					))}
				</div>
			</nav>
		</header>
	);
}
