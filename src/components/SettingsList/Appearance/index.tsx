type AppearanceProps = {
	toggleTheme: (theme: string) => void;
};

export const Appearance = ({ toggleTheme }: AppearanceProps) => {
	return (
		<div className="dark:text-white">
			<p>Setting applies to this browser only</p>

			<ul className="py-2">
				<li
					className="flex cursor-pointer items-center justify-between px-5 py-2 hover:bg-gray-50 dark:hover:bg-neutral-700"
					onClick={() => toggleTheme('dark')}
				>
					Dark theme
				</li>
				<li
					className="flex cursor-pointer items-center justify-between px-5 py-2 hover:bg-gray-50 dark:hover:bg-neutral-700"
					onClick={() => toggleTheme('light')}
				>
					Light theme
				</li>
			</ul>
		</div>
	);
};
