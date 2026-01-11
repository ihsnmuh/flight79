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
		<section className="relative h-[calc(100vh-64px)] flex items-center overflow-hidden">
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
						Boarding Now
					</div>

					<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-recoleta font-semibold leading-[1.1] text-white">
						Where Coffee <br />
						<span className="text-brand-primary">Takes Flight</span>
					</h1>

					<p className="text-white/90 text-base sm:text-lg leading-relaxed max-w-xl mt-2 font-light">
						Experience the perfect blend of aviation charm and culinary excellence. 
						From specialty coffee beans sourced globally to mouthwatering dishes that 
						transport your taste buds—every visit is a first-class journey.
					</p>

					<div className="flex flex-col sm:flex-row sm:flex-wrap items-center gap-4 mt-4">
						<Button variant="default" size="lg" className="w-full sm:w-auto">
							Book Your Flight
						</Button>
						<div className="hidden sm:block w-px h-8 bg-white/20" />
						<div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white shadow-sm w-full sm:w-auto justify-center">
							<Dotpulse isOpen={isOpen} />
							<div className="text-center">
								<p className="text-xs sm:text-sm font-medium">
									{isWeekend ? openingHours.weekend : openingHours.week}
								</p>
								<p className="text-xs sm:text-sm font-medium">
									{isOpen ? "We're Open!" : "Sorry, We're Closed!"}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
