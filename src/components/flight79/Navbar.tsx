import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/Button";
import Flight79Logo from "../ui/logos/flight79";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const menuItems = [
		{ id: "about", label: "About" },
		{ id: "menu", label: "Menu" },
		{ id: "blog", label: "Blog" },
		{ id: "atmosphere", label: "Atmosphere" },
		{ id: "location", label: "Location" },
	];

	return (
		<nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100">
			<div className="max-w-[1280px] mx-auto px-4 sm:px-10 py-5">
				<div className="flex items-center justify-between whitespace-nowrap">
					{/* Logo */}
					<div className="flex items-center gap-2 text-brand-text">
						<a href="/">
							<Flight79Logo className="sm:max-w-28 max-w-26 h-auto" />
						</a>
					</div>

					{/* Desktop Nav */}
					<div className="hidden md:flex flex-1 justify-center gap-10 items-center">
						{menuItems.map((item) => (
							<a
								key={item.id}
								href={`#${item.id}`}
								className="text-sm font-medium hover:text-brand-primary transition-colors"
							>
								{item.label}
							</a>
						))}
					</div>

					{/* Desktop CTA */}
					{/* <div className="hidden md:flex items-center gap-4">
						<Button
							variant="default"
							className="bg-brand-accent hover:bg-brand-accent/90 text-xs font-bold uppercase tracking-wider"
						>
							Book Table
						</Button>
					</div> */}

					{/* Mobile Menu Button */}
					<Button
						variant="outline"
						className="shadow-none bg-brand-accent hover:bg-brand-accent/90 md:hidden"
						onClick={() => setIsOpen(!isOpen)}
						type="button"
						size="icon"
					>
						<Menu color="white" />
					</Button>
				</div>
			</div>

			{/* Mobile Menu Dropdown (Basic Implementation) */}
			{isOpen && (
				<div className="md:hidden bg-white border-b border-gray-100 px-4 py-4 flex flex-col gap-4 shadow-lg absolute w-full z-40">
					{menuItems.map((item) => (
						<a
							key={item.id}
							href={`#${item.id}`}
							className="font-medium hover:text-brand-primary transition-colors"
							onClick={() => setIsOpen(false)}
						>
							{item.label}
						</a>
					))}
					{/* <Button className="bg-brand-accent hover:bg-brand-accent/90 font-bold uppercase tracking-wider w-full">
						Book Table
					</Button> */}
				</div>
			)}
		</nav>
	);
}
