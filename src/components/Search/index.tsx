import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { MicrophoneIcon } from '@heroicons/react/24/solid';

export const Search = () => {
	return (
		<>
			<input type="text" placeholder="Search" />
			<button>
				<MagnifyingGlassIcon className="h-6 w-6 text-gray-500 dark:text-white" />
			</button>
			<MicrophoneIcon
				className="h-6 w-6 text-black dark:text-white"
				title="Microphone"
			/>
		</>
	);
};
