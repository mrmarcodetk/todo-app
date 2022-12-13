import IconCheck from '@/assets/icons/icon-check.svg'
import { CheckBoxWrap, Icon, CheckboxContainer, HiddenCheckbox } from '@/pages/styled-components/check-box.styled'
import { useState } from 'react';

export interface CheckBoxInterface { }

const CheckBox: React.FC<CheckBoxInterface> = () => {
	const [activeCheck, setActiveCheck] = useState(true)

	const handleCheckBoxChange = () => {
		setActiveCheck(!activeCheck)
	}

	return (
		<CheckboxContainer onClick={handleCheckBoxChange}>
			{/* <CheckBoxWrap /> */}
			{/* <Icon src={IconCheck} alt="icon check" /> */}
			<HiddenCheckbox />
		</CheckboxContainer>
	);
};

export default CheckBox;
