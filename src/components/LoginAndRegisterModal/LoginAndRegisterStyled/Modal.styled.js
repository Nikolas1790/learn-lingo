import color from 'common/GlobalColers';
import { Field } from 'formik';
import styled from 'styled-components';

// export const Modal = styled.div`
//   display: block;
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   align-items: center;
//   justify-content: center;

//   display: flex;
//    z-index:5;
//    background: rgba(25, 26, 21, 0.6);

// `;

export const WrapperModal = styled.div`
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

  @media (max-width: 482px) {
    padding: 30px;
  };

`
export const WrapperModalTrail = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);

  max-width: 600px;


  background-color: ${color.whitePrimary};
  border-radius: 30px;
  padding: 64px;
  /* height: 100%;  */
  /* overflow-y: auto; */

  
  @media (max-width: 482px) {
    padding: 30px;
  };
`
// export const WrapperModalTrail = styled.div`
//   position: fixed;
//   top: 0;
//   left: 50%;
//   z-index: 2;
//   transform: translateX(-50%);

//   max-width: 600px;

//   background-color: ${color.whitePrimary};
//   border-radius: 30px;
//   padding: 64px;
//   @media (max-width: 482px) {
//     padding: 30px;
//   };
// `;


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

export const ModalTitle = styled.h2`
  font-weight: 500;
  font-size: 40px;
  line-height: 1.2;
  margin-bottom: 20px;
  /* letter-spacing: 1.4; */
`;

export const ModalText = styled.p`
  font-size: 16px;

  margin-bottom: 40px;
  color: rgba(18, 20, 23, 0.8);
  letter-spacing: 1.4;  
`;

export const ModalTextTrail = styled.p`
  font-size: 16px;

  margin-bottom: 20px;
  color: rgba(18, 20, 23, 0.8);
  letter-spacing: 1.4;  
`;

///////////  TrialLessonModal //////////////////////////

export const YourTeacherBlock = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 40px;
`;

export const YourTeacherImg = styled.img`
  width: 44px;
  height: 44px;
    border-radius: 50%; 
`;

export const YourTeacher = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: ${color.subtitleColor};
  margin-bottom: 4px;
  line-height: 1.33;
`;

export const YourTeacherNane = styled.h4`
  font-size: 16px;
  font-weight: 500;
`;



///////////////formic/////////////

export const TitleOfRadioBtns = styled.h3`
  font-size: 24px;
font-weight: 500;
line-height: 1.33;
margin-bottom: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
`;

export const GreenRadio = styled(Field)`
display: none;

`;

export const LabelRadio = styled.label`
position: relative;
white-space: nowrap;
display: flex;
align-items: center;
font-weight: 400;
 
&::before {
    content: '';
    width: 20px;
    height: 20px;
    border: 2px solid ${color.subtitleColor};
    border-radius: 50%;
    margin-right: 8px;
    display: inline-block;
  }
`;



export const CheckBoxActiveWrapper = styled.div`
position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 2px solid ${color.darkGgeen};
  border-radius: 50%;
  background: ${color.whitePrimary};

`;

export const CheckBoxActive = styled.div`
  width: 10px;
  height: 10px;
  background: ${color.darkGgeen};
  border-radius: 50%;
`;