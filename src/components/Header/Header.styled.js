import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import color from 'common/GlobalColers';

// const pulseAnimation = keyframes`
//   0% {
//     transform: scale(1);
//   }
//   50% {
//     transform: scale(1.1);
//   }
//   100% {
//     transform: scale(1);
//   }
// `;

export const HeaderContainer = styled.div`
position: relative;
  display: flex;
  justify-content: space-between ;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px; 
  margin: 0 auto; 
  max-width: 1184px;
`
export const HeaderNav = styled.nav`
    @media (min-width: 900px) {
    margin-left: 20px;
  };
  @media (max-width: 730px) {
    display: none;
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

//////////////////////////////////////////////////////////////////////////
/* 
export const WrapperMobileMenu = styled.div`
position: absolute;
  display: flex;
  flex-direction: column;
  left: 18%; 
  transform: translateX(-50%);
  top: 100%; 
  z-index: 1001;
  @media (min-width: 731px) {
    display: none;
  };
`

export const MobileMenuIcon = styled.button`

  display: flex;
  justify-content: space-between ;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px; 
  margin: 0 auto; 
  max-width: 1184px;
  background: transparent;
  stroke: ${color.blackPrimary};

  animation: ${pulseAnimation} 2s infinite;
`

export const MobileMenu = styled.div`
  position: absolute;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  left: 50%; 
  transform: translateX(-50%);
  top: 100%; 

  background: ${color.lightGreene};
  border-radius: 14px; 

` */