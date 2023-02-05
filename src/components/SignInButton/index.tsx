import { UserCircleIcon } from '@heroicons/react/24/outline';

export const SignInButton = () => {
	return (
		<button className="flex items-center border border-blue-500 py-1 px-2 text-sm font-bold text-blue-500 dark:border-blue-400 dark:text-blue-400">
			<UserCircleIcon className="mr-1 h-6 w-6 text-blue-500 dark:text-blue-400" />
			SIGN IN
		</button>
	);
};
