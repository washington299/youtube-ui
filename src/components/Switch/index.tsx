type SwitchProps = {
	label: string;
};

export const Switch = ({ label }: SwitchProps) => {
	return (
		<label className="inline-flex cursor-pointer items-center">
			<span className="ml-3 text-sm font-bold uppercase text-neutral-400">
				{label}
			</span>
			<input type="checkbox" value="" className="peer sr-only" />
			<div className="peer relative mx-2 h-4 w-10 rounded-full bg-gray-200 after:absolute after:top-[-2px] after:left-[1px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800" />
		</label>
	);
};
