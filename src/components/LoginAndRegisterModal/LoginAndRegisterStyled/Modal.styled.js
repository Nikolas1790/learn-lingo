import color from 'common/GlobalColers';
import styled from 'styled-components';

export const Modal = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  display: flex;
   z-index:5;
   background: rgba(25, 26, 21, 0.6);
  /* &.active {
    transform: scale(1);
    align-items: center;
    justify-content: center; 
    
  } */
`;

export const WrapperLoginModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);

  max-width: 566px;
  /* width: 566px; */
  min-height: 506px; 

  background-color: ${color.whitePrimary};
  border-radius: 30px;
  padding: 64px;
`

export const BtnClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  /* width: 100px; */
  /* height: 100px; */

  display: flex;
  justify-content: center;
  align-items: center;
  stroke: ${color.blackPrimary};
  background: transparent;
 

`;

/////////////////////////////////////////////////////

export const LoginModalTitle = styled.h2`
  font-weight: 500;
  font-size: 40px;
line-height: 1.2;
  margin-bottom: 20px;
  /* letter-spacing: 1.4; */
`;

export const LoginModalText = styled.p`
  font-size: 16px;

  margin-bottom: 40px;
  color: rgba(18, 20, 23, 0.8);
  letter-spacing: 1.4;  
`;
