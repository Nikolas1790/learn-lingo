import color from 'common/GlobalColers'
import styled from 'styled-components'

export const WrapperBlock = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px; 
`

export const Name = styled.p`
  font-weight: 500;
  line-height: 20px; 
`

export const BtnLogOutAndRegistration = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
 width: 168px;
 height: 48px;
  // padding: 14px 39px;
  color: ${color.whitePrimary};
  background: ${color.blackPrimary};

  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;

  transition: background 0.25s linear, color  0.25s linear;
  &:hover,
  &:focus {
    background:  ${color.darkGgeen};  
    color: ${color.blackPrimary};  
  }

  &:active {
    background: linear-gradient(to bottom, ${color.darkGgeen}, ${color.lightGreene});
  }
`

export const BtnLogIn = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  background: transparent;

  font-weight: 700;
  font-size: 16px;

`
