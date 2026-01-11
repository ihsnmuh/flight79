import { Coffee, Music, Utensils, Wifi } from "lucide-react";
import { useId } from "react";
import ValueCard from "../ui/cards/valueCard";

interface AboutProps {
	id?: string;
}

export default function About({ id }: AboutProps) {
	const generatedId = useId();
	const sectionId = id || generatedId;

	const values = [
		{
			title: "Premium Coffee Journey",
			subtitle: "Single-origin beans from world's finest coffee regions",
			icon: <Coffee />,
			color: "from-amber-500 to-orange-600",
		},
		{
			title: "Business Class Comfort",
			subtitle: "Work-friendly spaces with high-speed WiFi & power outlets",
			icon: <Wifi />,
			color: "from-blue-500 to-indigo-600",
		},
		{
			title: "Global Cuisine Destination",
			subtitle: "Artisanal dishes spanning continents and cultures",
			icon: <Utensils />,
			color: "from-red-500 to-pink-600",
		},
		{
			title: "Live Music Lounge",
			subtitle: "Acoustic performances every weekend evening",
			icon: <Music />,
			color: "from-purple-500 to-violet-600",
		},
	];

	return (
		<section id={sectionId} className="py-20 bg-white">
			<div className="max-w-[1280px] mx-auto px-4 sm:px-10">
				<div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
					<div>
						<h2 className="text-3xl sm:text-4xl font-recoleta font-medium mb-3 text-brand-text">
							Your Gateway to Exceptional Taste
						</h2>
						<p className="text-brand-muted text-sm sm:text-base">
							Step aboard Flight 79, where every cup tells a story and every meal 
							is an adventure. We've crafted an experience that combines 
							sophistication of first-class travel with warmth of your favorite cafe.
						</p>
					</div>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{/* Cards */}
					{values.map((item) => (
						<ValueCard key={item.title} {...item} />
					))}
</div>
			</div>
		</section>
	);
}