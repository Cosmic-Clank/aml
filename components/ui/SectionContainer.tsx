import React from "react";
import Heading from "./Heading";
import { cn } from "@/lib/utils";

const SectionContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
	return <section className={cn("max-w-7xl flex flex-col justify-center items-center px-10 py-20 relative", className)}>{children}</section>;
};

export default SectionContainer;
