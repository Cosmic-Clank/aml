import { cn } from "@/lib/utils";
import React from "react";

const Heading = ({ title, className, subtitle, subtitleClassName }: { title: string; className?: string; subtitle?: string; subtitleClassName?: string }) => {
	return (
		<div className='mx-auto flex flex-col justify-center items-center mb-4'>
			<h2 className={cn("text-3xl font-semibold", className)}>{title}</h2>
			{subtitle && <p className={cn("text-lg text-center text-gray-500", subtitleClassName)}>{subtitle}</p>}
			<hr className='w-12 border-2 my-4 border-[#6aaf08] rounded-full' />
		</div>
	);
};

export default Heading;
