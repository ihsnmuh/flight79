import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import About from "../components/flight79/About";
import Atmosphere from "../components/flight79/Atmosphere";
import Blog from "../components/flight79/Blog";
import CTA from "../components/flight79/CTA";
import Footer from "../components/flight79/Footer";
import Hero from "../components/flight79/Hero";
import Location from "../components/flight79/Location";
import Menu from "../components/flight79/Menu";
import Reviews from "../components/flight79/Reviews";

export const Route = createFileRoute("/")({
	loader: () => {
		const date = new Date();
		const day = date.getDay();
		const time = date.getHours();

		let isOpen = false;
		let isWeekend = false;

		if (day === 6 || day === 0) {
			isWeekend = true;
		}

		if (isWeekend) {
			if (time >= 7 && time < 22) {
				isOpen = true;
			}
		} else {
			if (time >= 8 && time < 21) {
				isOpen = true;
			}
		}

		return {
			isWeekend,
			isOpen,
		};
	},
	component: App,
});

function App() {
	const { isWeekend, isOpen } = Route.useLoaderData();

	return (
		<div className="flex flex-col min-h-screen">
			<Hero isWeekend={isWeekend} isOpen={isOpen} />
			<About />
			<Menu />
			<Reviews />
			<Blog />
			<Atmosphere />
			<Location />
			<CTA />
			<Footer />
		</div>
	);
}
