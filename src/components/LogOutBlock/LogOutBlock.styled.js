import color from 'common/GlobalColers'
import styled from 'styled-components'

export const WrapperLogOutBlock = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px; 

`


export const Name = styled.p`
  font-weight: 500;
  line-height: 20px;
 
`

export const BtnLogOut = styled.button`
  display: flex;
  align-items: center;
 
  padding: 14px 39px;
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

`