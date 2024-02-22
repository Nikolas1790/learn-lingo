import styled, { keyframes } from 'styled-components'
import color from 'common/GlobalColers';

const pulseAnimation = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
`;

export const WrapperMobileMenu = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    left: 18%; 
    transform: translateX(-50%);
    top: 100%; 
    z-index: 4;
    @media (min-width: 731px) {
        display: none;
    };
`

export const MobileMenuIcon = styled.button`
    display: flex;
    justify-content: space-between ;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px; 
    margin: 0 auto; 
    max-width: 1184px;
    background: transparent;
    stroke: ${color.blackPrimary};

    animation: ${pulseAnimation} 2s infinite;
`

export const MobileMenu = styled.div`
    position: absolute;
    z-index: 4;
    display: flex;
    flex-direction: column;
    left: 50%; 
    transform: translateX(-50%);
    top: 100%; 

    background: ${color.lightGreene};
    border-radius: 14px; 
`