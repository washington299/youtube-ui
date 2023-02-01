import { Switch } from 'components/Switch';

type RestrictedModeProps = {
	checked?: boolean;
	toggleSwitch: (value: 'off' | 'on') => void;
};

export const RestrictedMode = ({
	checked = false,
	toggleSwitch,
}: RestrictedModeProps) => {
	const handleToggleSwitch = (isChecked: boolean) => {
		toggleSwitch(isChecked ? 'on' : 'off');
	};

	return (
		<div className="px-4">
			<p className="mb-3">
				This helps hide potentially mature videos. No filter is 100% accurate.
			</p>

			<p className="mb-3">This setting only applies to this browser.</p>

			<Switch
				label="Activate Restricted Mode"
				checked={checked}
				toggleSwitch={handleToggleSwitch}
			/>
		</div>
	);
};
