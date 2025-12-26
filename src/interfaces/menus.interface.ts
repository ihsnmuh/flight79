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

export type BadgeVariant =
	| "79-signature"
	| "bestseller"
	| "top-pick"
	| "chef-pick"
	| "kids"
	| "fresh";

export interface ICategoryBadge {
	name: string;
	variant: BadgeVariant;
}

export interface IMenu {
	title: string;
	desc: string;
	image: string;
	price: string;
	category: Tab[];
	badge: ICategoryBadge;
}
