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
 /* background-color: ${(props) => props.backgroundColor || 'rgba(0, 0, 0, 0.7)'}; */
  /* transform: scale(0); */
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

  width: 566px;
  height: 506px; 

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
 
  /* transition: transform 0.3s ease; */
  /* &:hover {
    transform: scale(1.3);
    cursor: pointer;
  } */
`;

/////////////////////////////////////////////////////

export const LoginModalTitle = styled.h2`
  font-weight: 500;
  font-size: 40px;

  margin-bottom: 20px;
  /* letter-spacing: 1.4; */
`;

export const LoginModalText = styled.p`
  font-size: 16px;

  margin-bottom: 40px;
  color: rgba(18, 20, 23, 0.8);
  letter-spacing: 1.4;

  
`;
