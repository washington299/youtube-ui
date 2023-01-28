import { ChangeEvent, FormEvent, useState } from 'react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { MicrophoneIcon } from '@heroicons/react/24/solid';

type SearchProps = {
	callback: (text: string) => void;
};

export const Search = ({ callback }: SearchProps) => {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
		setInputValue(e.target.value);

	const clearInput = () => setInputValue('');

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		callback(inputValue);
	};

	return (
		<form className="flex w-full items-center" onSubmit={handleSubmit}>
			<div className="relative flex flex-1 items-center">
				<input
					type="text"
					placeholder="Search"
					className="w-full rounded-l-full border border-gray-200 py-2 pl-6 pr-8 outline-none focus:border-blue-600 dark:border-gray-700 dark:border-r-neutral-700 dark:bg-zinc-900 dark:text-white dark:focus:border-blue-400"
					value={inputValue}
					onChange={handleInputChange}
				/>
				{inputValue.length > 0 && (
					<XMarkIcon
						className="absolute right-2 h-5 w-5 cursor-pointer text-gray-500 dark:text-white"
						title="Clear"
						onClick={clearInput}
					/>
				)}
			</div>
			<button
				type="submit"
				className="z-10 rounded-r-full border border-gray-200 bg-gray-100 py-2 px-5 hover:bg-gray-200 dark:border-neutral-700 dark:bg-neutral-700 dark:hover:bg-neutral-800"
			>
				<MagnifyingGlassIcon className="h-6 w-6 text-gray-500 dark:text-white" />
			</button>
			<MicrophoneIcon
				className="ml-4 h-6 w-6 cursor-pointer text-black dark:text-white"
				title="Microphone"
			/>
		</form>
	);
};
