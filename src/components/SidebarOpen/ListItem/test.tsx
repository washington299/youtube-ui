import { render, screen } from '@testing-library/react';
import { HomeIcon as HomeIconOutline } from '@heroicons/react/24/outline';
import { HomeIcon as HomeIconSolid } from '@heroicons/react/24/solid';

import { ListItem } from '.';

const mockItem = {
	IconOutline: HomeIconOutline,
	IconSolid: HomeIconSolid,
	name: 'Home',
	link: '/',
};

describe('<ListItem />', () => {
	it('Should render elements items list correctly', () => {
		render(<ListItem {...mockItem} isCurrentPage={false} />);

		expect(screen.getByRole('link')).toHaveAttribute('href', '/');
		expect(screen.getByLabelText(/Home icon outline/i)).toBeInTheDocument();
		expect(screen.queryByLabelText(/Home icon solid/i)).not.toBeInTheDocument();
		expect(screen.getByText(/Home/i)).toBeInTheDocument();
	});
});
