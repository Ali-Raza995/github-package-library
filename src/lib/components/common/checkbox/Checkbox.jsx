import React from 'react';
import { CheckBox, Input, RememberCheckBox } from './Checkbox.style';
import { useTranslation } from 'react-i18next';

const Checkbox = (props) => {
  const { t } = useTranslation();
  const { id, type, name, title, value, setValue, labelStyle } = props;
  
  return (
    <RememberCheckBox isChecked={value}>
      <CheckBox>
        <Input
          type={type || 'checkbox'}
          name={name || 'check'}
          id={id || 'check'}
          checked={value}
          value={value}
          onChange={(e) => setValue(e.target.checked)}
        />
      </CheckBox>
      <label htmlFor={id || 'check'} style={{ ...labelStyle, cursor: 'pointer' }}>
        {t(title)}
      </label>
    </RememberCheckBox>
  );
};

export default Checkbox;
