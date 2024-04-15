/* eslint-disable no-undef */
import React, { useState } from 'react';
import * as Styles from './LanguageDropdown.style';
import { Icon, Popup } from 'semantic-ui-react';
import { H6, P } from '../../utils/resuable-css';
import { languageArray } from '../../constants/language';

const LanguageDropdown = ({ language, handleLanguage, isHeader = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  let language_text = languageArray?.find((data) => data.value === language);
  console.log('language', language)
  return (
    <Popup
      closable
      preserve
      open={isOpen}
      onClose={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
      popper={{ id: 'popper-container', style: { zIndex: 2000 } }}
      on="click"
      wide
      position="bottom left"
      style={{ padding: 0, right: '2px', left: 'unset', backgroundColor: 'white' }}
      trigger={
        <Styles.DropdownContainer onClick={() => setIsOpen(!isOpen)}>
          <Icon name="chevron down" />
          <Styles.SelectedDropdown>
            <H6 className="bold">{language}</H6>
            {!isHeader && <H6>{language_text?.text}</H6>}
          </Styles.SelectedDropdown>
        </Styles.DropdownContainer>
      }
    >
      <Popup.Content>
        <Styles.Dropdown>
          {languageArray?.map((data, i) => (
            <Styles.DropdownList
              key={i}
              onClick={() => {
                setIsOpen(!isOpen);
                handleLanguage(data.value);
              }}
            >
              <p className="bold">{data.value}</p>
              <p>{data.text}</p>
            </Styles.DropdownList>
          ))}
        </Styles.Dropdown>
      </Popup.Content>
    </Popup>
  );
};
export default LanguageDropdown;
