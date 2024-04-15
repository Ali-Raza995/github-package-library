import styled from 'styled-components';

export const DropdownContainer = styled.div`
  margin-top: 2px;
  display: flex;
  align-items: center;
  h6 {
    margin: 0;
  }
  i {
    margin-top: -8px;
    margin-right: 0.7em;
  }
  cursor: pointer;
`;

export const DropdownList = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
  padding: 0.5em 1em;
  .bold {
    text-transform: uppercase;
    font-weight: bold;
    width: 2em;
  }
  &:hover {
    background: #d1d1d1;
  }
`;

export const SelectedDropdown = styled.div`
  display: flex;
  align-items: center;
  .bold {
    text-transform: uppercase;
    font-weight: bold;
    margin-right: 0.6em;
  }
`;

export const Dropdown = styled.div`
  margin: 8px 0;
  cursor: pointer;
  z-index: 10;
  background: white;
  width: 10em;
  border-radius: 5px;
  p {
    margin: 0;
  }
`;
