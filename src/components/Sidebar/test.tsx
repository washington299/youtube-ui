import { render, screen } from '@testing-library/react';

import { Sidebar } from '.';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');
useRouter.mockImplementation(() => ({
	pathname: '/shorts',
}));

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

	it('Should render correct active sidebar item based on pathname', () => {
		render(<Sidebar isOpen />);

		expect(screen.getByLabelText(/Shorts icon solid/i)).toBeInTheDocument();
		expect(
			screen.queryByLabelText(/Shorts icon outline/i),
		).not.toBeInTheDocument();
	});
});
