import { ChangeEvent, useState } from 'react';

type SwitchProps = {
	label: string;
	checked?: boolean;
	toggleSwitch: (check: boolean) => void;
};

export const Switch = ({
	label,
	checked = false,
	toggleSwitch,
}: SwitchProps) => {
	const [isChecked, setIsChecked] = useState(checked);

	const handleChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
		setIsChecked(e.target.checked);
		toggleSwitch(e.target.checked);
	};

	return (
		<label className="inline-flex cursor-pointer items-center">
			<span className="text-sm font-bold uppercase text-neutral-400">
				{label}
			</span>
			<input
				type="checkbox"
				checked={isChecked}
				className="peer sr-only"
				onChange={handleChangeCheckbox}
			/>
			<div className="peer relative mx-2 h-4 w-10 rounded-full bg-gray-300 after:absolute after:top-[-2px] after:left-[1px] after:h-5 after:w-5 after:rounded-full after:border after:border-black after:bg-black after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-blue-600 peer-checked:after:bg-blue-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:after:border-white dark:after:bg-white dark:peer-focus:ring-blue-800" />
		</label>
	);
};
