import color from 'common/GlobalColers'
import styled from 'styled-components'

export const WraperCard = styled.li`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 32px;
    border-radius: 24px;
    background: ${color.whitePrimary};
    width: 1184px;
    @media (max-width: 1216px) {
       width: auto;
  };
`
export const CardHeartBtn = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
   ${color.blackPrimary};
  background: transparent;
`;

export const ImgCardConteiner = styled.div`
    padding: 24px;    
`

export const BorderImgCard = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 120px;
    border-radius: 50%; 
    border: 3px solid ${color.lightGreene};    
`

export const ImgCard = styled.img`
    max-width: 96px;
    border-radius: 50%;   
`

export const ActiveGreenSvg = styled.svg`
    position: absolute;
    top: 17px;
    right: 17px;  
`
//////////////////////////////////////////////////////////

export const InformCardConteiner = styled.div`
    padding: 24px;
    font-weight: 500;    
`
export const MainInfBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 8px;    
`

export const Subtitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    color: ${color.subtitleColor};

    @media (max-width: 1160px) {
        margin-bottom: 12px;
  };
`
export const InformShortCardConteiner = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: 192px;
    
    @media (max-width: 1160px) {
        margin-left: 40px;
        margin-bottom: 32px;
  };    
`

export const LessonsOnline = styled.p`
    display: flex;
    align-items: center;
    fill: ${color.whitePrimary};
    stroke: ${color.blackPrimary};
    
    gap: 4px;
`

export const Rating = styled.p`
    display: flex;
    align-items: center;
    gap: 4px;
`

export const Divider = styled.div`
    position: relative;
    display: inline-block;
    margin: 0 16px; 
    
    &::before {
        content: '';
        position: absolute;
        top: 0;        
        height: 100%;
        width: 1px;
        background-color: rgba(18, 20, 23, 0.2); 
    }

    @media (max-width: 560px) {
       display: none;
  };
`;



export const Price = styled.span`
     color: ${color.BrightGreen};
`

export const FullName = styled.h2`
    margin-bottom: 32px;
    line-height: 1;
`


export const BlockSkills = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;  
`

export const BlockShortInformationsTeacher = styled.div`
    display: flex;
    gap:2px;   
`
export const LanguagesUnderlined = styled.p`
    text-decoration: underline;   
`

export const ReadMoreBtn = styled.button`
    font-weight: 500;
    margin-bottom: 32px;
    font-size: 16px;
    background: transparent;
    text-decoration: underline; 

    &:hover {
        text-decoration: none; 
    }
`


export const LevelsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 1.14;
`

export const LevelLanguage = styled.li`
    padding: 8px 12px;
    border-radius: 35px;
    border: 1px solid rgba(18, 20, 23, 0.2);

    &:first-child {
        border-color: transparent;
        background: ${color.darkGgeen}
    }
`

//////////////////////////////////////////////////////

export const TrialLessonBtn = styled.button`
    font-weight: 700;
    font-size: 18px;
    margin-top: 32px;
    background: transparent;
    padding: 16px 48px 16px 48px;
    background: ${color.darkGgeen};
    border-radius: 12px;

    transition: background 0.25s linear;
    &:hover,
    &:focus {    
      background: ${color.lightGreene}; 
    }
`