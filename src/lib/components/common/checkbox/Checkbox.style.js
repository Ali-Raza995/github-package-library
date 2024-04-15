import styled from 'styled-components';
import Checkbox from '../../../assets/svg/check-box.svg';
import UncheckBox from '../../../assets/svg/uncheck-box.svg';

export const CheckBox = styled.div`
  padding-top: 5px;
  padding-right: 10px;
`;

export const Input = styled.input`
  appearance: none;
  outline: 0 !important;
  padding: 0;
  margin: 0 !important;
  top: 0;
  background: url(${UncheckBox}) no-repeat;
  height: 25px;
  width: 25px;
  background-size: 25px;
  cursor: pointer !important;
  &:checked {
    background: url(${Checkbox}) no-repeat;
    height: 25px;
    width: 25px;
    background-size: 25px;
  }
`;

export const RememberCheckBox = styled.div`
  padding-right: 10px;
  margin-top: 5px;
  background-color: ${(props) => (props.isChecked ? '#cfcfcf' : 'white')};
  display: flex;
  align-items: center;
  border-radius: 10px;
  border-bottom: ${(props) => (props.isChecked ? '2px solid orange' : '2px solid white')};
  width: 15em;
`;
