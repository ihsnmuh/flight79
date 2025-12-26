import type { BadgeVariant } from "@/interfaces/menus.interface";
import { Badge } from "../Badge";
import { Button } from "../Button";

interface MenuItemProps {
	image: string;
	title: string;
	desc: string;
	price: string;
	badge?: string;
	badgeVariant?: BadgeVariant;
}

export const MenuItem = ({
	image,
	title,
	desc,
	price,
	badge,
	badgeVariant,
}: MenuItemProps) => {
	return (
		<div className="group bg-white rounded-2xl p-4 border border-gray-100 shadow-soft hover:shadow-xl hover:border-brand-primary/20 transition-all duration-300 cursor-pointer flex flex-col h-full">
			<div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 bg-gray-50">
				{badge && (
					<div className="absolute top-2 left-2 z-10">
						<Badge variant={badgeVariant}>{badge}</Badge>
					</div>
				)}
				<img
					alt={title}
					className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
					src={image}
				/>
			</div>
			<div className="flex flex-col flex-1">
				<h3 className="font-serif font-bold text-lg text-brand-text mb-1 group-hover:text-brand-primary transition-colors line-clamp-2">
					{title}
				</h3>
				<p className="text-xs text-brand-muted mb-3 line-clamp-2">{desc}</p>
				<div className="mt-auto hidden group-hover:flex items-center justify-between">
					<span className="font-bold text-brand-primary text-lg">{price}</span>
					<Button
						size="icon"
						variant="secondary"
						className="w-8 h-8 hover:bg-brand-primary hover:text-white"
					>
						<span className="material-symbols-outlined text-sm">add</span>
					</Button>
				</div>
			</div>
		</div>
	);
};
