import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { FaLocationDot, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa6";

const SocialIcons = ({ className }: { className?: string }) => {
	return (
		<div className={cn("flex flex-row justify-center items-center gap-16 mt-10", className)}>
			<Link href='#'>
				<FaInstagram size={30} />
			</Link>
			<Link href='#'>
				<FaFacebook size={30} />
			</Link>
			<Link href='#'>
				<FaWhatsapp size={30} />
			</Link>
			<Link href='#'>
				<FaLocationDot size={30} />
			</Link>
		</div>
	);
};

export default SocialIcons;
