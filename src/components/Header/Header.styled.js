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
  
  padding: 14px;
  font-size: 16px;
  line-height: 1.25;
  /* transition: transform 0.3s linear; */

  /* &:hover,
  &:focus {
    color:  ${color.lightBlue};
    transform: scale(1.1);    
  } */

  /* &.active {
    color:  ${color.whitePrimary};
    font-weight: bold;    
  } */

  /* &:not(:last-child) {
    margin-right: 40px;
  } */
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








// export const InnerHeaderContainer = styled.header`
//   display:flex;
//   justify-content: space-between;
//   margin: 0 auto; 
//   max-width: 1184px;
//   background-color:yellow;

// `;

// export const StyledLink = styled(NavLink)` 
//   display: inline-block;
//   padding: 8px;
//   font-size: 20px;
//   font-weight: 500;
//   color: ${color.blackPrimary};  
//   transition: transform 0.3s linear;

//   &:hover,
//   &:focus {
//     color:  ${color.lightBlue};
//     transform: scale(1.1);    
//   }

//   &.active {
//     color:  ${color.darkBlue};
//     font-weight: bold;    
//   }

//   &:not(:last-child) {
//     margin-right: 40px;
//   }
// `

// export const PhoneLink = styled.a`  
//   font-size: 16px;
//   font-weight: 500;
//   padding: 8px;

//   transition: transform 0.3s linear;

//   &:hover,
//   &:focus {
//     color:  ${color.lightBlue};
//     transform: scale(1.1);
    
//   }
// `;

