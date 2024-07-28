"use client";

import Image from "next/image";
import { Open_Sans } from "next/font/google";
import { useState } from "react";
import Link from "next/link";
import Button from "./ui/ButtonCustom";

const navigation = [
	{ name: "Home", href: "#", current: false },
	{ name: "About", href: "#", current: false },
	{ name: "Services", href: "#", current: false },
	{ name: "Projects", href: "#", current: false },
	{ name: "Testimonials", href: "#", current: false },
	{ name: "Contact", href: "#", current: false },
];

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

const font = Open_Sans({ subsets: ["latin"] });

export default function Example() {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleNavbar = () => {
		setIsExpanded((prev) => !prev);
	};

	return (
		<header className='w-full'>
			<nav className='hidden lg:flex w-full h-full flex-row justify-between items-center px-44 py-12 z-50'>
				<div>
					<Link href='/'>
						<Image alt='Al Madena Landscape Logo' src='/images/logos/leaf-white.png' width={100} height={100} />
					</Link>
				</div>
				<div className={`flex flex-row gap-10 uppercase transition-transform ${font.className} ${isExpanded ? "scale-100" : "scale-0"}`}>
					<ul className='flex flex-row gap-10'>
						{navigation.map((item) => (
							<li key={item.href}>
								<Link href={item.href} className='hover:text-gray-700'>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<Button onClick={toggleNavbar} className='w-16 h-10 p-0' text='MENU' />
			</nav>

			<nav className='relative lg:hidden flex flex-row justify-between items-center px-8 py-2 z-50'>
				<div>
					<Link href='/'>
						<Image alt='Al Madena Landscape Logo' src='/images/logos/leaf-white.png' width={100} height={100} />
					</Link>
				</div>
				<Button onClick={toggleNavbar} className='w-16 h-10 p-0' text='MENU' />

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
