import { render, screen } from '@testing-library/react';

import { SidebarOpen } from '.';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');
useRouter.mockImplementation(() => ({
	pathname: '/shorts',
}));

describe('<SidebarOpen />', () => {
	it('Should render elements items list correctly', () => {
		render(<SidebarOpen />);

		expect(screen.getAllByRole('listitem')).toHaveLength(22);
		expect(
			screen.getByRole('button', { name: /Sign in/i }),
		).toBeInTheDocument();
	});
});
