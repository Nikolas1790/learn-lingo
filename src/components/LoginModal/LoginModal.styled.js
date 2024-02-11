import color from 'common/GlobalColers';
import styled from 'styled-components';


export const Modal = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
 /* background-color: ${(props) => props.backgroundColor || 'rgba(0, 0, 0, 0.7)'}; */
  /* transform: scale(0); */
  display: flex;
  /* overflow: auto; */
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
  /* overflow-y: auto; */

  background-color: ${color.whitePrimary};
  border-radius: 30px;
  padding: 64px;
`