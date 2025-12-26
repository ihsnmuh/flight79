import { useId, useState } from "react";
import type { IMenu } from "@/interfaces/menus.interface";
import { menus } from "../../const/menus";
import { Button } from "../ui/Button";
import { MenuItem } from "../ui/cards/menuCard";

interface MenuProps {
	id?: string;
}

type Tab =
	| "bestseller"
	| "coffee"
	| "noncoffee"
	| "soupandsalad"
	| "liteandbite"
	| "pizza"
	| "pastaandnoodles"
	| "indonesiandelight"
	| "pasteryandcake";

export default function Menu({ id }: MenuProps) {
	const [activeTab, setActiveTab] = useState<Tab>("bestseller");
	const generatedId = useId();
	const sectionId = id || generatedId;

	const tabs: { id: Tab; label: string }[] = [
		{ id: "bestseller", label: "Best Seller" },
		{ id: "indonesiandelight", label: "Indonesian Delight" },
		{ id: "pasteryandcake", label: "Pastery and Cake" },
		{ id: "coffee", label: "Coffee" },
		{ id: "noncoffee", label: "Non-Coffee" },
		{ id: "soupandsalad", label: "Soup and Salad" },
		{ id: "liteandbite", label: "Lite and Bites" },
		{ id: "pizza", label: "Pizza" },
		{ id: "pastaandnoodles", label: "Pasta and Noodles" },
	];

	return (
		<section id={sectionId} className="py-20 bg-brand-bg">
			<div className="max-w-[1280px] mx-auto px-4 sm:px-10">
				<div className="text-center mb-8">
					<h2 className="text-3xl md:text-4xl font-recoleta font-medium text-brand-text mb-4">
						In-Flight Menu
					</h2>
					<p className="text-brand-muted max-w-xl mx-auto">
						Discover our diverse global selections, from signature coffees to
						Western, Italian, and Indonesian delicacies.
					</p>
				</div>

				{/* Tabs */}
				<div className="flex overflow-x-auto w-full gap-2 items-center py-2 mb-4 justify-start scrollbar-hide">
					{tabs.map((tab) => (
						<Button
							key={tab.id}
							variant={activeTab === tab.id ? "default" : "outline"}
							className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap shrink-0 ${
								activeTab === tab.id
									? "bg-brand-primary text-white"
									: "bg-white text-brand-primary border border-brand-primary"
							}`}
							onClick={() => setActiveTab(tab.id)}
						>
							{tab.label}
						</Button>
					))}
				</div>

				{/* Menu */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
					{menus
						.filter((menu) => menu.badge.variant === activeTab)
						.map((menu: IMenu) => (
							<MenuItem
								key={menu.title}
								image={menu.image}
								title={menu.title}
								desc={menu.desc}
								price={menu.price}
								badge={menu.badge?.name}
								badgeVariant={menu.badge?.variant}
							/>
						))}
				</div>

				<div className="mt-12 flex flex-col items-center justify-center gap-4 border-t border-gray-200 pt-8">
					<p className="text-lg font-bold font-recoleta uppercase tracking-widest text-brand-muted">
						In-Flight Delivery
					</p>
					<div className="flex gap-8 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
						{/* <span className="font-black text-xl text-green-600 cursor-pointer">
							GoFood
						</span>
						<span className="font-black text-xl text-green-500 cursor-pointer">
							GrabFood
						</span>
						<span className="font-black text-xl text-orange-500 cursor-pointer">
							ShopeeFood
						</span> */}
						<span className="font-black text-xl text-orange-500 cursor-pointer">
							Coming Soon!
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}
