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
  width: 1440px;
  background: ${color.whiteDarker};;
`

export const BtnLoadMore = styled.button`
  font-weight: 700;
  font-size: 18px;

  width: 183px;
  height: 60px;
  background: ${color.darkGgeen};
  border-radius: 12px; 
  margin: 0 auto;

  transition: background 0.25s linear;
  &:hover,
  &:focus {    
  background: ${color.lightGreene}; 
}

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