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
  border: 1px solid	${(props) => (props.error === "true" ? "red" : "rgba(18, 20, 23, 0.1)")};
  border-radius: 12px;
  margin-bottom: 18px;
  font-size: 16px;
  padding: 16px 18px;
  outline: none;
`;

export const FormFieldPassvordConteiner = styled.div`
  position: relative;
`;

export const FormFieldPassvord = styled(Field)`
  width: 100%;
  height: 50px;
  border: 1px solid	${(props) => (props.error === "true" ? "red" : "rgba(18, 20, 23, 0.1)")};
  border-radius: 12px;
  margin-bottom: 40px;
  font-size: 16px;
  padding: 16px 18px;
  outline: none;
`;

export const EyeSvg = styled.svg`
  position: absolute;
  top: 17px;
  right: 17px;
  cursor: pointer;
  stroke: ${color.blackPrimary};
  fill: none;
`;

export const FormBtn = styled.button`
  width: 100%;
  height: 60px;
  border-radius: 12px;
  background: ${color.darkGgeen};

  font-size: 18px;
  font-weight: 700;

  transition: background 0.25s linear;
  &:hover,
  &:focus {    
    background: ${color.lightGreene}; 
  }
`;