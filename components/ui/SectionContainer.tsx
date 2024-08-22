import React from "react";
import Heading from "./Heading";
import { cn } from "@/lib/utils";

const SectionContainer = ({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) => {
	return (
		<section id={id} className={cn("max-w-7xl flex flex-col justify-center items-center px-10 py-40 relative", className)}>
			{children}
		</section>
	);
};

export default SectionContainer;
