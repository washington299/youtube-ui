import { render, screen } from '@testing-library/react';

import { ListItem } from '.';
import { mockItem } from './mock';

describe('<ListItem />', () => {
	it('Should render elements items list correctly', () => {
		render(<ListItem {...mockItem} isCurrentPage={false} />);

		expect(screen.getByRole('link')).toHaveAttribute('href', '/');
		expect(screen.getByLabelText(/Home icon outline/i)).toBeInTheDocument();
		expect(screen.queryByLabelText(/Home icon solid/i)).not.toBeInTheDocument();
		expect(screen.getByText(/Home/i)).toBeInTheDocument();
	});

	it('Should render correct icon based on isCurrentPage prop', () => {
		render(<ListItem {...mockItem} isCurrentPage />);

		expect(screen.getByLabelText(/Home icon solid/i)).toBeInTheDocument();
		expect(
			screen.queryByLabelText(/Home icon outline/i),
		).not.toBeInTheDocument();
	});

	it('Should render next image if icon prop is provided', () => {
		render(<ListItem {...mockItem} icon="/logo.svg" isCurrentPage={false} />);

		expect(screen.getByRole('img')).toHaveAttribute('src', '/logo.svg');
	});
});
