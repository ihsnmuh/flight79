import { Star } from "lucide-react";

interface ReviewCardProps {
	image: string;
	name: string;
	review?: string;
	rating: number;
}

const ReviewCard = ({ image, name, review, rating }: ReviewCardProps) => {
	return (
		<div className="relative rounded-2xl overflow-hidden h-64 group cursor-pointer">
			<img
				alt="Reviewer Budi"
				className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
				src={image}
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
				<div className="flex text-yellow-400 mb-2">
					{Array.from({ length: rating }).map((_, idx) => (
						<Star
							key={`star-${idx}`}
							width={20}
							height={20}
							fill="var(--color-yellow-400)"
							color="none"
						/>
					))}
				</div>
				<p className="text-white text-sm font-medium italic mb-2">{review}</p>
				<p className="text-white/80 text-xs font-bold">- {name}</p>
			</div>
		</div>
	);
};

export default ReviewCard;
