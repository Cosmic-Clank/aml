import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { FaLocationDot, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa6";

const SocialIcons = ({ className }: { className?: string }) => {
	return (
		<div className={cn("flex flex-row justify-center items-center gap-16 mt-10", className)}>
			<Link href='https://bit.ly/36MYkqc'>
				<FaInstagram size={30} />
			</Link>
			<Link href='#'>
				<FaFacebook size={30} />
			</Link>
			<Link href='https://wa.me/+971558476162'>
				<FaWhatsapp size={30} />
			</Link>
			<Link href='https://goo.gl/maps/hLphPZNWPz8FLs657'>
				<FaLocationDot size={30} />
			</Link>
		</div>
	);
};

export default SocialIcons;
