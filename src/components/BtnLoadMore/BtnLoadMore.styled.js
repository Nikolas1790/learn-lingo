import color from 'common/GlobalColers'
import styled from 'styled-components'

export const ButtonLoadMore = styled.button`
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
   &:active {
    background: linear-gradient(to bottom, ${color.darkGgeen}, ${color.lightGreene});
  }
`