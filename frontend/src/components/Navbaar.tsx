"use client";
import {
	Navbar,
	NavBody,
	NavItems,
	MobileNav,
	NavbarLogo,
	NavbarButton,
	MobileNavHeader,
	MobileNavToggle,
	MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

export function NavbarDemo() {
	const navItems = [
		{
			name: "Home",
			link: "#home",
		},
		{
			name: "Playground",
			link: "#playground",
		},
		{
			name: "Stockfish LLM",
			link: "#stockfish-llm",
		},
	];

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<div className="relative w-full">
			<Navbar>
				{/* Desktop Navigation */}
				<NavBody>
					<NavbarLogo />
					<NavItems items={navItems} />
					<div className="flex items-center gap-4">
						<NavbarButton variant="secondary">Github</NavbarButton>
						<NavbarButton variant="primary">Login</NavbarButton>
					</div>
				</NavBody>

				{/* Mobile Navigation */}
				<MobileNav>
					<MobileNavHeader>
						<NavbarLogo />
						<MobileNavToggle
							isOpen={isMobileMenuOpen}
							onClick={() =>
								setIsMobileMenuOpen(!isMobileMenuOpen)
							}
						/>
					</MobileNavHeader>

					<MobileNavMenu
						isOpen={isMobileMenuOpen}
						onClose={() => setIsMobileMenuOpen(false)}
					>
						{navItems.map((item, idx) => (
							<a
								key={`mobile-link-${idx}`}
								href={item.link}
								onClick={() => setIsMobileMenuOpen(false)}
								className="relative text-neutral-600 dark:text-neutral-300"
							>
								<span className="block">{item.name}</span>
							</a>
						))}
						<div className="flex w-full flex-col gap-4">
							<NavbarButton
								onClick={() => setIsMobileMenuOpen(false)}
								variant="primary"
								className="w-full"
							>
								Github
							</NavbarButton>
							<NavbarButton
								onClick={() => setIsMobileMenuOpen(false)}
								variant="primary"
								className="w-full"
							>
								Login
							</NavbarButton>
						</div>
					</MobileNavMenu>
				</MobileNav>
			</Navbar>
			{/* <DummyContent /> */}

			{/* Navbar */}
		</div>
	);
}

const DummyContent = () => {
	return <div className=""></div>;
};
