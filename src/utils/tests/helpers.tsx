import React, { FC, ReactElement } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import fs from 'fs';

const wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
	return <>{children}</>;
};

export const renderWithTailwind = (
	ui: ReactElement,
	options?: Omit<RenderOptions, 'wrapper'>,
): RenderResult => {
	const view = render(ui, { wrapper, ...options });

	const style = document.createElement('style');
	style.innerHTML = fs.readFileSync('public/css/tailwind.css', 'utf8');
	document.head.appendChild(style);

	return view;
};
