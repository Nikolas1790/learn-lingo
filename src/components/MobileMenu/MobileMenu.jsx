import {  useEffect, useRef, useState } from "react";
import sprite from '../../img/svg-file.svg';
import {  StyledNavigation} from "components/Header/Header.styled";
import { useAuth } from "components/AuthProvider/AuthProvider";
import { MobileMenu, MobileMenuIcon, WrapperMobileMenu } from "./MobileMenu.styled";

export default function MobileMenuComponent() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const { authUser } = useAuth();
    const mobileMenuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
                setMobileMenuOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev); 
    };
    
    return (
        <WrapperMobileMenu ref={mobileMenuRef}>
            <MobileMenuIcon onClick={toggleMobileMenu}>
                <svg width={38} height={38}>
                    <use href={`${sprite}#icon-burger`} />
                </svg>
            </MobileMenuIcon>

            {mobileMenuOpen && (
                <MobileMenu>
                    <StyledNavigation to="/" onClick={toggleMobileMenu}>
                        Home
                    </StyledNavigation>
                    <StyledNavigation to="/teachers" onClick={toggleMobileMenu}>
                        Teachers
                    </StyledNavigation>
                    {authUser && (
                        <StyledNavigation to="/favorites" onClick={toggleMobileMenu}>
                            Favorites
                        </StyledNavigation>
                    )}
                </MobileMenu>
            )}
        </WrapperMobileMenu> 
    );
};