"use client";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const Numbers = () => {
	const ref = useRef(null);
	const [inView, setInView] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setInView(true);
					if (ref.current) observer.unobserve(ref.current); // Unobserve after counting to prevent repeated triggers
				}
			},
			{ threshold: 0.3 } // Trigger when 10% of the section is in view
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, []);
	return (
		<section ref={ref} className='min-h-96 flex items-center justify-center bg-white w-full py-44 px-12'>
			{inView && (
				<div className='flex flex-col lg:flex-row gap-32 text-center'>
					{numbers.map((num, index) => (
						<div key={index} className='flex flex-col items-center justify-center bg-green w-64 h-64 rounded-full shadow-harsh'>
							<CountUp className='text-4xl font-bold text-white rounded-full' suffix='+' start={0} end={num.number} duration={5} />
							<p dangerouslySetInnerHTML={{ __html: num.text }} className='text-2xl text-white uppercase p-2 tracking-wider' />
						</div>
					))}
				</div>
			)}
		</section>
	);
};

const numbers = [
	{ number: 200, text: "Satisfied<br /> Clients" },
	{ number: 12, text: "Years of experience" },
	{ number: 200, text: "Projects Completed" },
];

export default Numbers;
