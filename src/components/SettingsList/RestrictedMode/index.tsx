import { useState } from 'react';

import { Switch } from 'components/Switch';

type RestrictedModeProps = {
	checked?: boolean;
};

export const RestrictedMode = ({ checked = false }: RestrictedModeProps) => {
	const [isChecked, setIsChecked] = useState(checked);

	return (
		<div>
			<p>
				This helps hide potentially mature videos. No filter is 100% accurate.
			</p>

			<p>This setting only applies to this browser.</p>

			<Switch
				label="Activate Restricted Mode"
				checked={isChecked}
				toggleSwitch={() => {}}
			/>
		</div>
	);
};
