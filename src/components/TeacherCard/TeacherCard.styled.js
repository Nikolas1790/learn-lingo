import color from 'common/GlobalColers'
import styled from 'styled-components'

export const WraperCard = styled.div`
    display: flex;
    margin-bottom:  64px 64px;
  /* align-items: center; */
  /* flex-direction:column; */
 
`

export const ImgCardConteiner = styled.div`
    padding: 24px;
    
`

export const BorderImgCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 120px;
    border-radius: 50%; 
    border: 4px solid ${color.lightGreene};
    
`

export const ImgCard = styled.img`
    max-width: 96px;
    border-radius: 50%; 
  
`
//////////////////////////////////////////////////////////

export const InformCardConteiner = styled.div`
    padding: 24px;
    font-weight: 500;
     /* font-size: 16px;  */
    
`
export const MainInfBlock = styled.div`
    display: flex;
    gap:20px;
    margin-bottom: 8px;
    
`

export const Subtitle = styled.h3`
    font-size: 16px;
    font-weight: 500;

    /* margin-right: 192px; */
    color: ${color.subtitleColor};
`
export const Price = styled.span`
     color: ${color.BrightGreen};
`

export const FullName = styled.h2`
    margin-bottom: 32px;
    line-height: 1;
     /* color: ${color.BrightGreen}; */
`


export const BlockSkills = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;

    /* padding: 24px; */    
`

export const BlockShortInformationsTeacher = styled.div`
    display: flex;
    gap:2px;

    /* padding: 24px; */    
`
export const LanguagesUnderlined = styled.p`
    text-decoration: underline;   
`



export const ReadMoreBtn = styled.button`
    font-weight: 500;
    margin-bottom: 32px;
    background: transparent;
    text-decoration: underline; 
    /* transition: text-decoration 0.3s linear; */

    &:hover {
        text-decoration: none; 
    }
`


export const LevelsList = styled.ul`
    display: flex;
    gap: 8px;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 1.14;
    /* padding: 8px 12px;
    border: red;
    background: red; */
  
    /* transition: text-decoration 0.3s linear; */
    /* &:hover {
        text-decoration: none; 
    } */
`

export const LevelLanguage = styled.li`
    /* display: flex;
    gap: 8px;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 1.14; */

        padding: 8px 12px;
    border-radius: 35px;
    border: 1px solid red;

`