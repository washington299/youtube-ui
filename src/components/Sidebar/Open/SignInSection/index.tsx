import { SignInButton } from 'components/SignInButton';

export const SignInSection = () => {
	return (
		<div className="px-5">
			<p className="mb-3 leading-5 dark:text-white">
				Sign in to like videos, comment, and subscribe.
			</p>
			<SignInButton />
		</div>
	);
};
