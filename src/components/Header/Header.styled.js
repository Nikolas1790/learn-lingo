import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import color from 'common/GlobalColers';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between ;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px; 
  margin: 0 auto; 
  max-width: 1184px;
`
export const HeaderNav = styled.nav`
    @media (min-width: 412px) {
    margin-left: 120px;
  };

`

export const StyledNavigation = styled(NavLink)` 
  position: relative;
  padding: 14px;
  font-size: 16px;
  line-height: 1.25;

  &.active {

    &::after {
      content: '';
      /* display: block; */
      position: absolute;
      width: 8px;
      height: 8px; 
      border-radius: 50%; 
      background-color: ${color.darkGgeen};
      left: 50%; 
      transform: translateX(-50%);
      top: 75%; 
    }
  }

  &:first-of-type.active {
    &::after {
      display: none;
    }
  }

`


//////////////////////////////////////////

export const WrapperAuthorizationMenu = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px; 

`
export const BtnLogIn = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  background: transparent;

  font-weight: 700;
  font-size: 16px;

`
export const BtnRegistration = styled.button`
  display: flex;
  align-items: center;
 
  padding: 14px 39px;
  color: ${color.whitePrimary};
  background: ${color.blackPrimary};

  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;

  transition: background 0.25s linear, color  0.25s linear;
  &:hover,
  &:focus {
    background:  ${color.darkGgeen};  
    color: ${color.blackPrimary};  
  }

`
