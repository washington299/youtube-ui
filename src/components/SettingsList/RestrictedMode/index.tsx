import { Switch } from 'components/Switch';

export const RestrictedMode = () => {
	return (
		<div>
			<p>
				This helps hide potentially mature videos. No filter is 100% accurate.
			</p>

			<p>This setting only applies to this browser.</p>

			<Switch label="Activate Restricted Mode" toggleSwitch={() => {}} />
		</div>
	);
};
