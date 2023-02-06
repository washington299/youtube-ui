import { render, screen } from '@testing-library/react';

import { Sidebar } from '.';

describe('<Sidebar />', () => {
	it('Should render sidebar closed if isOpen prop is false', () => {
		render(<Sidebar isOpen={false} />);

		expect(screen.getAllByRole('listitem')).toHaveLength(5);
	});

	it('Should render sidebar open if isOpen prop is true', () => {
		render(<Sidebar isOpen />);

		expect(
			screen.getByRole('button', { name: /Sign in/i }),
		).toBeInTheDocument();
	});
});
