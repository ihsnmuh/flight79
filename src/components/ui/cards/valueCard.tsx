import React from 'react';

interface ValueCardProps {
	title: string;
	subtitle: string;
	icon: React.ReactNode;
	color?: string;
	image?: string;
}

const ValueCard = ({ title, subtitle, icon, color, image }: ValueCardProps) => {
	return (
		<div key={title} className="group cursor-pointer">
			<div className="h-64 rounded-3xl overflow-hidden mb-4 relative">
				{image ? (
					<>
						<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
						<img
							alt={title}
							className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
							src={image}
						/>
					</>
				) : (
					<div className={`w-full h-full bg-gradient-to-br ${color || 'from-gray-400 to-gray-600'} flex items-center justify-center transition-transform duration-700 group-hover:scale-110`}>
						<div className="text-white/20 text-6xl">
							{icon}
						</div>
					</div>
				)}
				<div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm text-brand-primary">
					{icon}
				</div>
			</div>
			<h3 className="font-bold text-lg text-brand-text">{title}</h3>
			<p className="text-sm text-brand-muted mt-1">{subtitle}</p>
		</div>
	);
};

export default ValueCard;