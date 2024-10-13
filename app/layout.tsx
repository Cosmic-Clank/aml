import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Al Madena Landscape LLC | Premier Landscaping Services in Dubai",
	description: "With 15 years of experience, Al Madena Landscape LLC provides top-quality landscaping design, build, and transformation services in Dubai. We cater to both individual clients and villa communities, delivering beautiful, sustainable outdoor spaces.",
	openGraph: {
		title: "Al Madena Landscape LLC | Premier Landscaping Services in Dubai",
		description: "Renowned for excellence, Al Madena Landscape LLC specializes in landscaping design, build, and makeover projects in Dubai. Our team enhances outdoor spaces with professionalism and unmatched value.",
		images: [
			{
				url: "/images/logos/leaf-white.png", // Replace with actual image path
				width: 800,
				height: 600,
				alt: "Al Madena Landscape LLC Logo",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Al Madena Landscape LLC | Premier Landscaping Services in Dubai",
		description: "For 15 years, Al Madena Landscape LLC has been Dubai's leading provider of landscaping services, delivering transformative design and build solutions for outdoor spaces.",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
