import sprite from '../../img/svg-file.svg';
import { StyledLogo } from './Logo.styled';

export const Logo = () => {
    return (
        <nav>            
            <StyledLogo  to="/">
                <svg width={28} height={28}>
                    <use href={`${sprite}#icon-ukraine`} />
                </svg>
                LearnLingo
            </StyledLogo >
        </nav>   
    )
}
