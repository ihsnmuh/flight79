import { Button } from "../ui/Button";
import Dotpulse from "../ui/Dotpulse";

export default function Hero({
	isWeekend,
	isOpen,
}: {
	isWeekend: boolean;
	isOpen: boolean;
}) {
	const openingHours = {
		week: "08:00 - 21:00",
		weekend: "07:00 - 22:00",
	};

	return (
		<section className="relative h-[650px] flex items-center overflow-hidden">
			<div className="absolute inset-0 z-0">
				<img
					alt="Flight 79 Interior"
					className="w-full h-full object-cover object-center"
					src="https://res.cloudinary.com/doc4dinqa/image/upload/v1766660311/WhatsApp_Image_2025-12-25_at_17.57.51_nss65z.jpg"
				/>
				<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
			</div>

			<div className="max-w-[1280px] mx-auto px-4 sm:px-10 w-full relative z-10">
				<div className="max-w-3xl flex flex-col gap-6">
					<div className="inline-flex items-center gap-2 text-brand-accent font-bold text-sm tracking-widest uppercase">
						<span className="w-8 h-px bg-brand-accent"></span>
						First Class Experience
					</div>

					<h1 className="text-5xl md:text-7xl font-recoleta font-semibold leading-[1.1] text-white">
						Flight 79 Coffee <br />
						<span className="text-brand-primary">& Eatery</span>
					</h1>

					<p className="text-white/90 text-lg leading-relaxed max-w-xl mt-2 font-light">
						A unique aviation-themed cafe offering both expertly crafted coffee
						and a diverse global menu. Enjoy Western, Indonesian, and Italian
						cuisine in a first-class atmosphere. The perfect spot for any
						craving, from espresso to full meals.
					</p>

					<div className="flex flex-wrap items-center gap-8 mt-4">
						<Button variant="default" size="lg">
							Reserve Table
						</Button>
						<p className="text-white/90 text-lg font-medium hidden md:block">
							{"|"}
						</p>
						<div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white shadow-sm">
							<Dotpulse isOpen={isOpen} />
							<p className="text-sm font-medium text-center">
								{isWeekend ? openingHours.weekend : openingHours.week}
							</p>
							<p className="text-sm font-medium text-center">
								{isOpen ? "We are Open!" : "Sorry, We are Closed!"}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
