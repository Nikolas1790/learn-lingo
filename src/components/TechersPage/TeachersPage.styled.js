import color from 'common/GlobalColers'
import { ErrorMessage } from 'formik'
import styled from 'styled-components'

export const WraperBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction:column; 
`

export const TeachersPageContainer = styled.div`
  display: flex;
  align-items: start;
  flex-Direction: column;
  padding:64px 128px 96px 128px;
  background: ${color.whiteDarker};;
`

export const ErrorMessageStyled = styled(ErrorMessage)`
  color: red;
  font-size: 14px;
  margin-top: -20px; 
  padding:  5px 10px 10px;
`;

export const ErrorMessagePassword = styled(ErrorMessage)`
  color: red;
  font-size: 14px;
  margin-top: -40px; 
  padding:  5px 10px 10px;
`;

export const EmailErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: -20px  ; 
  padding:  5px 10px 10px;
`;