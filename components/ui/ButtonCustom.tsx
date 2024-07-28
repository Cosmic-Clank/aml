import { cn } from "@/lib/utils";
import React from "react";

const Button = ({ text, icon, onClick, className }: { text?: string; icon?: React.ReactNode; onClick?: () => void; className?: string }) => {
	return (
		<button onClick={onClick} className={cn("px-8 py-4 mt-4 bg-white hover:bg-green-900 rounded-lg uppercase text-green-900 hover:text-white transition-colors duration-500 border border-gray-700", className)}>
			{text}
			{icon}
		</button>
	);
};

export default Button;
