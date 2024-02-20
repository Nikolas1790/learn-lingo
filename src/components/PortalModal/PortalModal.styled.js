import styled from "styled-components";

// export const Modal = styled.div`
//   display: block;
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   align-items: center;
//   justify-content: center;
//  background-color: ${(props) => props.backgroundColor || 'rgba(0, 0, 0, 0.7)'};
//   transform: scale(0);
//   display: flex;
//   overflow: auto;
//    z-index:1005;
//   &.active {
//     transform: scale(1);
//     align-items: center;
//     justify-content: center; 
    
//   }
// `;

export const Modal = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;    
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(25, 26, 21, 0.6);    
    overflow: auto;
    z-index:5;

    transform: scale(0);

    &.active {
        transform: scale(1);
    }
`;