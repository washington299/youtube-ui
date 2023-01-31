import { fireEvent, screen } from '@testing-library/react';

import { renderWithTailwind } from 'utils/tests/helpers';

import { Language } from '.';

describe('<Language />', () => {
	it('Should render languages list correctly', () => {
		renderWithTailwind(<Language />);

		expect(screen.getAllByRole('listitem')).toHaveLength(23);
	});
});
