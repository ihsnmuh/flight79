import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const badgeVariants = cva(
	"inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
	{
		variants: {
			variant: {
				default:
					"border-transparent bg-brand-primary text-white hover:bg-brand-primary/80",
				secondary:
					"border-transparent bg-gray-100 text-brand-text hover:bg-gray-100/80",
				destructive:
					"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
				outline: "text-brand-text",
				"79-signature":
					"border-transparent bg-brand-text text-white tracking-wider uppercase font-bold px-2 py-1 text-[10px]",
				bestseller:
					"border-transparent bg-orange-500 text-white tracking-wider uppercase font-bold px-2 py-1 text-[10px]",
				"top-pick":
					"border-transparent bg-blue-500 text-white tracking-wider uppercase font-bold px-2 py-1 text-[10px]",
				"chef-pick":
					"border-transparent bg-brand-accent text-brand-text tracking-wider uppercase font-bold px-2 py-1 text-[10px]",
				kids: "border-transparent bg-pink-500 text-white tracking-wider uppercase font-bold px-2 py-1 text-[10px]",
				fresh:
					"border-transparent bg-green-500 text-white tracking-wider uppercase font-bold px-2 py-1 text-[10px]",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

export interface BadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
	return (
		<div className={cn(badgeVariants({ variant }), className)} {...props} />
	);
}

export { Badge, badgeVariants };
