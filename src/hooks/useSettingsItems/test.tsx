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

	it('Should change Language correctly', () => {
		const { result } = renderHook(() => useSettingsItems());

		expect(result.current.language).toBe('english_us');

		act(() => {
			result.current.changeLanguage('portugues_brasil');
		});

		expect(result.current.language).toBe('portugues_brasil');

		act(() => {
			result.current.changeLanguage('english_us');
		});

		expect(result.current.language).toBe('english_us');
	});
});
