import color from 'common/GlobalColers';
import styled from 'styled-components'

export const WraperMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 32px;
  min-width: 1184px;

  @media (max-width: 1260px) {
    min-width: auto;
  };
`

export const TitleMenu = styled.p`
  font-weight: 500;
  color: ${color.subtitleColor};
  margin-bottom:8px;
`

export const OptLanguages = styled.li`
  font-weight: 500;
`

export const Dropdown = styled.div`
  position: relative;
`;

export const DropdownButton = styled.button`
  display: flex;

  font-weight: 500;
  font-size: 18px;
  height: 48px;
  border-radius: 14px; 
  border: none;
  outline: none;
  cursor: pointer;

  background-color: ${color.whitePrimary};
  padding: 10px;

  min-width: ${props => props.width || '221px'};
`;

export const DropdownList = styled.ul`
  position: absolute;
  z-index: 1;
  top: 100%;
  left: 0;
  background-color: ${color.whitePrimary};
  border: 1px solid ${color.greySuperLight};
  border-top: none;
  display: none;

  list-style: none;
  padding: 0;
  margin: 0;

  width: 100%;
  border-radius: 0 0 12px 12px;

  ${Dropdown}:hover & {
    display: block;
  }
`;

export const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;  

  &:hover {
    background-color: ${color.greySuperLight};
  }
`;

export const ResetButton = styled.button`
  display: flex;
  font-weight: 500;
  font-size: 20px;
  border-radius: 8px; 
  border: none;
  outline: none;
  margin-top: auto;

  background-color: ${color.darkGgeen};
  padding: 4px 12px;

  transition: background 0.25s linear;
  &:hover,
  &:focus {    
    background: ${color.lightGreene}; 
  }
  &:active {
    background: linear-gradient(to bottom, ${color.darkGgeen}, ${color.lightGreene});
  }
`;