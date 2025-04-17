"use client";

import React from "react";
import { NavbarDemo } from "./Navbaar";
import { AuroraBackground } from "./ui/aurora-background";
import { motion } from "framer-motion";

export default function Home() {
	return (
		<AuroraBackground className="h-screen w-full">
			<NavbarDemo />
			<motion.div
				initial={{ opacity: 0.0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.3,
					duration: 0.8,
					ease: "easeInOut",
				}}
				className="container mx-auto relative flex flex-col gap-4 items-center justify-center px-4"
			>
				<div className="text-center items-center justify-center w-xs bg-white rounded-full text-gray-500 m-10 text-sm py-0.5">
					This website is currently under development.
				</div>
				<div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
					LLM CHESS
				</div>
				<div className="font-extralight text-base text-center md:text-2xl dark:text-neutral-200 py-4 container mx-auto">
					An advanced AI-powered chess game where two large language
					models (LLMs) compete in real-time, showcasing their
					strategic thinking and decision-making capabilities.
				</div>
				<div className="flex flex-row gap-4">
					<button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
						Play now
					</button>
					<button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
						Stockfish LLM
					</button>
				</div>
			</motion.div>
		</AuroraBackground>
	);
}
