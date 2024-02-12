import { Logo } from "components/Logo/Logo";
import { BtnLogIn, BtnRegistration, HeaderContainer, HeaderNav, StyledNavigation, WrapperAuthorizationMenu } from "./Header.styled";
import { useState } from "react";
import LoginModal from "components/LoginAndRegisterModal/LoginModal";
import RegistrationModal from "components/LoginAndRegisterModal/RegistrationModal";
import sprite from '../../img/svg-file.svg';

export default function Header() {
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const [registerModalOpen, setRegisterModalOpen] = useState(false);

    const openLoginModal = () => {
        setLoginModalOpen(true);
        setRegisterModalOpen(false); // Закрываем окно регистрации, если открыто
    };

    const openRegisterModal = () => {
        setRegisterModalOpen(true);
        setLoginModalOpen(false); // Закрываем окно логина, если открыто
    };
    const closeModals = () => {
        // console.log('Closing modals');
        setLoginModalOpen(false);
        setRegisterModalOpen(false);
    };
    return (
        <HeaderContainer>
            <Logo />
            
            <HeaderNav>
                <StyledNavigation to="/">Home</StyledNavigation>
                <StyledNavigation to="/teachers">Teachers</StyledNavigation>
                <StyledNavigation to="/favorites">Favorites</StyledNavigation>
            </HeaderNav>

            {loginModalOpen && <LoginModal closeModals={closeModals} />}
            {registerModalOpen && <RegistrationModal closeModals={closeModals} />}

            

            <WrapperAuthorizationMenu>                
                <BtnLogIn onClick={openLoginModal}>
                    <svg width={20} height={20}>
                        <use href={`${sprite}#icon-log-in`} />
                    </svg>
                    <p>Log in</p>
                </BtnLogIn>
                <BtnRegistration onClick={openRegisterModal}>Registration</BtnRegistration>
            </WrapperAuthorizationMenu>
        </HeaderContainer>
    );
  };