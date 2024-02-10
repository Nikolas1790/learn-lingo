import color from 'common/GlobalColers'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const WraperBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction:column;
  /* background-size: cover;
  min-height: 640px; */
`

export const WelcomePageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-Direction: column;
  padding:0px 20px 60px 20px;
  max-width: 1440px;
`

export const ContainerGreeting = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 24px;
  /* flex-direction:column; */

`

////////////  ContainerMainInf  //////////////////////////////////
export const ContainerMainInf = styled.div`
  box-sizing: border-box;
  max-width: 720px;
  padding: 98px 108px 98px 68px;
  border-radius: 30px;
  background: ${color.whiteDarker};

`

export const Title = styled.h1`
  font-weight: 500;
  font-size: 48px;
  line-height: 1.17;
  letter-spacing: -2px;
  margin-bottom: 32px;
`

export const TitleLenguage = styled.span`
  font-weight: 400;
  font-style: italic;
  display: inline-block;
  border-radius: 8px;
  padding: 0 4px; 
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 12px;
    left: 0px;
    right: 0;
    bottom: 2px;
    z-index: -1;
    background-color: ${color.lightGreene};
    border-radius: 8px;
  }
`;


export const MotivationalText = styled.p`
 max-width: 471px;
  font-size: 16px;
  line-height: 1.38;
  margin-bottom: 64px;

`
export const BtnGetStarted = styled(NavLink)`
display: inline-block;
padding: 16px 88px;
font-weight: 700;
font-size: 18px;
background: ${color.darkGgeen};
border-radius: 12px;

transition: background 0.25s linear;
&:hover,
&:focus {    
  background: ${color.lightGreene}; 
}
`

////////////  /\ ContainerMainInf  //////////////////////////////////
export const ChildImg = styled.img`
border-radius: 30px;
  /* max-width: 568px; */
  /* max-width: 100%;
  height: auto; */
`










///////////////////////////////////////////////////////////////////////////

export const ContainerBenefits = styled.div`

  display: flex;
  align-items: center;
  flex-wrap:  wrap;
  gap: 100px;

  padding: 40px 122px;
  color: ${color.gryeTextColor};
  border-radius: 30px;
  border: 2px solid ${color.darkGgeen};
  border-style: dashed;

  /* border-image: repeating-linear-gradient(0deg, ${color.darkGreen}, ${color.darkGreen} 5px, transparent 5px, transparent 10px); */
`

export const IndividualContainerBenefits = styled.div`
  display: flex; 
`

export const DataFigures = styled.p`
  font-size: 28px;
  font-weight: 500;
  line-height: 1.14;

  margin-right: 16px;
 
`


export const SmallTitleFirstTwo  = styled.p`
  width: 96px;
  line-height: 1.29;
`
export const SmallTitleSecondTwo  = styled.p`
  width: 74px;
  line-height: 1.29;
 
`