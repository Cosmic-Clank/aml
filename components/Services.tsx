"use client";
import Image from "next/image";
import SectionContainer from "./ui/SectionContainer";
import Heading from "./ui/Heading";

export default function Services() {
	return (
		<SectionContainer className='bg-white w-full max-w-none'>
			<Heading title='Our Services' />
			{services.map((service, index) => (
				<div className='flex flex-col'>
					<div key={index} className='flex flex-col lg:flex-row py-10 gap-12 max-w-7xl'>
						<div className='flex flex-row gap-4 sm:gap-8'>
							<div className='aspect-square max-w-72 max-h-72 lg:w-72 lg:h-72 flex flex-row overflow-hidden rounded-xl'>
								<Image className='w-full h-full object-cover hover:scale-[120%] transition-transform duration-200' src={service.image} width={500} height={500} alt='Service Image' />
							</div>
							<div className=' aspect-square max-w-72 max-h-72 lg:w-72 lg:h-72 flex flex-row overflow-hidden rounded-xl'>
								<Image className='w-full h-full object-cover hover:scale-[120%] transition-transform duration-200' src={service.image} width={500} height={500} alt='Service Image' />
							</div>
						</div>
						<div className=''>
							<h3 className='text-xl mb-4'>{service.title}</h3>
							<p className='text-gray-500'>{service.description}</p>
						</div>
					</div>
					<hr className='border-gray-400' />
				</div>
			))}
		</SectionContainer>
	);
}

const services = [
	{
		title: "GARDEN DESIGN",
		description: "Whether you seek to transform a small space to include lovely plants and flowers or want to build a grand outdoor garden to entertain in, the professional designers at AML are ready to help bring your vision to life.",
		image: "/images/services/1.jpg",
	},
	{
		title: "GARDEN MAKEOVER",
		description: "Al Madena landscaping offers clients beautiful garden landscaping and expert garden maintenance services for all sizes of gardens whether residential or commercial across Dubai, UAE.",
		image: "/images/services/2.jpg",
	},
	{
		title: "GARDEN MAINTENANCE",
		description: "We all are well aware that the majority of homeowners do not have enough time to focus on the maintenance of garden. And that’s why we’re here to help you out with our gardening services.",
		image: "/images/services/3.jpg",
	},
	{
		title: "SWIMMING POOL CONSTRUCTION",
		description: "Our aim is to design and construct the best swimming pools, jacuzzi’s and landscapes in UAE, for all budgets and lifestyles. We offer both design and construction of swimming pools, construction of garden areas, and swimming pool and garden maintenance.",
		image: "/images/services/4.jpg",
	},
	{
		title: "SWIMMING POOL MAINTENANCE",
		description: "Our technicians and crew managers provide constant, caring attention to your landscape. Hiring a professional landscape maintenance provider is the most effective way to maintain the investment you’ve made in your outdoor project.",
		image: "/images/services/5.jpg",
	},
	{
		title: "IRRIGATION",
		description: "We install and maintain a wide variety of garden irrigation systems, ranging from drip irrigation to more complex sprinkler systems. Whether you are looking for a brand new irrigation system to maintain your lawn or the replacement of a sprinkler head in your current system the experts at AML are one phone-call away.",
		image: "/images/services/6.jpg",
	},
	{
		title: "TREE TRANSPLANTATION",
		description: "We have recruited a large scale of experts, developed special techniques and acquired specialized equipment that has qualified us to relocate trees in the UAE with the best success rate.",
		image: "/images/services/7.jpg",
	},
	{
		title: "SUPPLY PLANTS AND TREES",
		description: "We provide both the supply & installation of a wide range of indoor plants and planters, whether you’re looking to just add some green to your space or looking to make a statement. We’ve got you covered!",
		image: "/images/services/8.jpg",
	},
	{
		title: "COMMUNITY MAINTENANCE",
		description: "We work with you to help create a landscape plan that is contemporary and vibrant and enhances the value of your properties. We also partner with you to provide efficient ongoing maintenance and are available at a moment’s notice to provide cleanup after storms or snowfall.",
		image: "/images/services/9.jpg",
	},
	{
		title: "WATER FEATURES / FOUNTAINS",
		description: "Elevate the ambiance of your outdoor space with an elegant water & fire feature. We love using features that feel inviting for homeowners and guests. Our team will supply and install your favourite water features and fountains.",
		image: "/images/services/10.jpg",
	},
	{
		title: "GARDEN WOOD WORKS (PERGOLA/GAZEBO)",
		description: "We are one of the leading contractors in Dubai and UAE for the construction of pergolas and gazebos for the past 12 years. If you are looking for the company that constructs the best gazebos and pergolas in Dubai and UAE, get in touch...",
		image: "/images/services/11.jpg",
	},
	{
		title: "BBQ AREA, TURF GRASS, TILING ETC",
		description: "For most outdoor bars, BBQ areas, tiling and turf grass you’ll want to hire a landscape contractor who is familiar with building outdoor entertaining spaces. If you’re thinking of this feature as part of a more extensive outdoor area, you should get in touch with us…",
		image: "/images/services/12.jpg",
	},
];
