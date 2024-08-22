import { cn } from "@/lib/utils";
import React from "react";

const Heading = ({ title, className, subtitle, subtitleClassName }: { title: string; className?: string; subtitle?: string; subtitleClassName?: string }) => {
	return (
		<div className={cn(" flex flex-col justify-center mb-4 mx-auto items-center", className)}>
			<h2 className='text-3xl font-semibold uppercase tracking-widest'>{title}</h2>
			{subtitle && <p className={cn("text-lg text-center text-gray-500", subtitleClassName)}>{subtitle}</p>}
			<hr className='w-12 border-2 my-4 border-green rounded-full' />
		</div>
	);
};

export default Heading;
