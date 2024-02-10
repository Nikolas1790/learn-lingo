import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
// import { NavLink } from 'react-router-dom';
import color from 'common/GlobalColers';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;

  padding: 8px; 
  margin: 0 auto; 
  max-width: 1184px;
  background-color:yellow;
`
export const StyledNavigation = styled(NavLink)` 
  /* display: inline-block; */
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

