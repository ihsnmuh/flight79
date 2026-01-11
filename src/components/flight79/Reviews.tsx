import { ExternalLink, Star } from "lucide-react";
import { reviews } from "@/const/reviews";
import { Button } from "../ui/Button";
import ReviewCard from "../ui/cards/reviewCard";

export default function Reviews() {
	const placeInfo = reviews.place_info;
	const reviewsFirstData = reviews.reviews.filter(
		(review) => review.user.name === "Adnan Lazuardi",
	)[0];
	const reviewsSecondData = reviews.reviews.filter(
		(review) => review.user.name === "Ahmad Jundan",
	)[0];
	const reviewsThirdData = reviews.reviews.filter(
		(review) => review.user.name === "Sheila Fawziyya J",
	)[0];

	const listReview = [reviewsSecondData, reviewsThirdData];
	const urlReviews = reviews.search_metadata.google_maps_reviews_url;

	return (
		<section className="py-20 bg-white">
			<div className="max-w-[1280px] mx-auto px-4 sm:px-10">
				<div className="flex items-center gap-2 mb-8">
					<h2 className="text-2xl sm:text-3xl font-recoleta font-medium">
						What Our Travelers Say
					</h2>
					<div className="h-px bg-gray-200 flex-1 ml-4"></div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10">
					<div className="lg:col-span-4 flex flex-col gap-4 sm:gap-6">
						<div className="flex items-center gap-2 sm:gap-3">
							<div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 bg-cover border border-gray-200">
								<img
									alt="Reviewer Adnan"
									className="w-full h-full object-cover"
									src={reviewsFirstData.user.thumbnail}
								/>
							</div>
							<div>
								<h4 className="font-bold text-xs sm:text-sm">
									{reviewsFirstData.user.name}
								</h4>
								<p className="text-xs text-brand-muted">Customer</p>
							</div>
						</div>
						<div className="flex text-yellow-400 text-sm">
							{Array.from({ length: reviewsFirstData.rating }).map((_, idx) => (
								<Star
									key={idx}
									width={16}
									height={16}
									fill="var(--color-yellow-400)"
									color="none"
								/>
							))}
						</div>
						<h3 className="text-lg sm:text-xl font-bold leading-snug">
							{reviewsFirstData.snippet}
						</h3>
						{/* <p className="text-brand-muted text-sm leading-relaxed">
							A calm and comfortable atmosphere that makes you want to stay for
							hours. Complete facilities and very satisfying first-class
							service.
						</p> */}
						<div className="mt-auto">
							<div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-50 text-yellow-800 text-xs font-bold rounded-md border border-yellow-100">
								<Star
									width={16}
									height={16}
									fill="var(--color-yellow-400)"
									color="none"
								/>
								{`${placeInfo.rating}/5 from ${placeInfo.reviews}+ reviews at Flight 79 Coffee and Eatery`}
							</div>
						</div>
					</div>

					<div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
						{listReview.map((review) => (
							<ReviewCard
								key={review.user.name}
								image={review.user.thumbnail}
								name={review.user.name}
								review={review?.snippet}
								rating={review.rating}
							/>
						))}
					</div>
				</div>

				<div className="mt-8 text-center">
					<Button
						variant="outline"
						className="px-6 py-3 h-auto text-sm font-bold text-brand-text hover:bg-gray-50 inline-flex items-center gap-2"
						onClick={() => {
							window.open(urlReviews, "_blank");
						}}
					>
						Read More Passenger Stories
						<ExternalLink width={16} height={16} />
					</Button>
				</div>
			</div>
		</section>
	);
}
