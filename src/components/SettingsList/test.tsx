import { render, screen } from '@testing-library/react';

import { SettingsList } from '.';

describe('<SettingsList />', () => {
	it('Should render correct items', () => {
		render(<SettingsList />);

		expect(screen.getAllByRole('list')).toHaveLength(4);
		expect(screen.getAllByRole('listitem')).toHaveLength(9);
		expect(screen.getByText(/Your data in Youtube/i)).toBeInTheDocument();
	});
});
