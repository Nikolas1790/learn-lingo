import color from 'common/GlobalColers';
import { Field } from 'formik';
import styled from 'styled-components';

export const FormFields = styled.div`
  display: flex;
  flex-direction: column;

`;

export const FormField = styled(Field)`
  width: 100%;
  height: 50px;
  border: 1px solid	rgba(18, 20, 23, 0.1);
  /* color: rgb(18, 20, 23); */
  border-radius: 12px;
  margin-bottom: 18px;
  font-size: 16px;
  padding: 16px 18px;
  outline: none;
  &:active,
  &:focus,
  &:hover {
    /* color: #407bff; */
  }

`;

export const FormFieldPassvordConteiner = styled.div`
  position: relative;

`;

export const FormFieldPassvord = styled(Field)`
/* position: fixed; */
  width: 100%;
  height: 50px;
  border: 1px solid	rgba(18, 20, 23, 0.1);
  /* color: rgb(18, 20, 23); */
  border-radius: 12px;
  margin-bottom: 40px;
  font-size: 16px;
  padding: 16px 18px;
  outline: none;
  &:active,
  &:focus,
  &:hover {
    /* color: #407bff; */
  }

`;

export const EyeSvg = styled.svg`
  position: absolute;
  top: 17px;
  right: 17px;
  /* transform: translateY(-25%); */
  cursor: pointer;
  stroke: ${color.blackPrimary};
  fill: none;
`;


export const FormBtn = styled.button`
  /* padding: 16px 192px; */
  height: 60px;
  border-radius: 12px;
  background: ${color.darkGgeen};

  /* margin-top: auto; */
  font-size: 18px;
  font-weight: 700;

  transition: background 0.25s linear;
&:hover,
&:focus {    
  background: ${color.lightGreene}; 
}
`;