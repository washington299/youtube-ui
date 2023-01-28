import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { MicrophoneIcon } from '@heroicons/react/24/solid';

export const Search = () => {
	const [inputValue, setInputValue] = useState('');

	return (
		<form className="flex w-full items-center">
			<input
				type="text"
				placeholder="Search"
				className="flex-1 rounded-l-full border border-gray-200 py-2 px-4 outline-none focus:border-blue-600 dark:border-gray-700 dark:border-r-neutral-700 dark:bg-zinc-900 dark:text-white dark:focus:border-blue-400"
				value={inputValue}
				onChange={e => setInputValue(e.target.value)}
			/>
			<button className="z-10 rounded-r-full border border-gray-200 bg-gray-100 py-2 px-5 hover:bg-gray-200 dark:border-neutral-700 dark:bg-neutral-700 dark:hover:bg-neutral-800">
				<MagnifyingGlassIcon className="h-6 w-6 text-gray-500 dark:text-white" />
			</button>
			<MicrophoneIcon
				className="ml-4 h-6 w-6 cursor-pointer text-black dark:text-white"
				title="Microphone"
			/>
		</form>
	);
};
