import { render, screen } from '@testing-library/react';
import {
	HomeIcon as HomeIconOutline,
	FilmIcon as FilmIconOutline,
} from '@heroicons/react/24/outline';
import {
	HomeIcon as HomeIconSolid,
	FilmIcon as FilmIconSolid,
} from '@heroicons/react/24/solid';

import { ListItems } from '.';

const mockItems = [
	{
		IconOutline: HomeIconOutline,
		IconSolid: HomeIconSolid,
		name: 'Home',
		link: '/',
	},
	{
		IconOutline: FilmIconOutline,
		IconSolid: FilmIconSolid,
		name: 'Shorts',
		link: '/shorts',
	},
];

describe('<ListItems />', () => {
	it('Should render elements list of items correctly', () => {
		render(<ListItems items={mockItems} />);

		expect(screen.getAllByRole('listitem')).toHaveLength(2);
		expect(screen.getByText(/Home/i)).toBeInTheDocument();
		expect(screen.getByText(/Shorts/i)).toBeInTheDocument();
	});
});
