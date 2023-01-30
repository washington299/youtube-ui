import { renderHook, act } from '@testing-library/react-hooks';

import { useSettingsItems } from '.';

describe('useSettingsItems()', () => {
	it('Should change toggle theme correctly', () => {
		const { result } = renderHook(() => useSettingsItems());

		expect(result.current.theme).toBe('light');

		act(() => {
			result.current.changeTheme('dark');
		});

		expect(result.current.theme).toBe('dark');

		act(() => {
			result.current.changeTheme('light');
		});

		expect(result.current.theme).toBe('light');
	});
});
