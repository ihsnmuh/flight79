interface DotpulseProps {
	isOpen: boolean;
}

const Dotpulse = ({ isOpen }: DotpulseProps) => {
	return (
		<span className="relative flex size-3">
			<span
				className={`absolute inline-flex h-full w-full animate-ping rounded-full ${isOpen ? "bg-green-400" : "bg-red-400"} opacity-75`}
			></span>
			<span
				className={`relative inline-flex size-3 rounded-full ${isOpen ? "bg-green-500" : "bg-red-500"}`}
			></span>
		</span>
	);
};

export default Dotpulse;
