import { Logo } from "components/Logo/Logo";
import { HeaderContainer, StyledNavigation } from "./Header.styled";
import { useState } from "react";
import LoginModal from "components/LoginModal/LoginModal";
import RegistrationModal from "components/RegistrationModal/RegistrationModal";

export default function Header() {
    const [LoginModalOpen, setLoginModalOpen] = useState(false);
    const [RegisterModalOpen, setRegisterModalOpen] = useState(false);

    const openLoginModal = () => {
        setLoginModalOpen(true);
        setRegisterModalOpen(false); // Закрываем окно регистрации, если открыто
    };

    const openRegisterModal = () => {
        setRegisterModalOpen(true);
        setLoginModalOpen(false); // Закрываем окно логина, если открыто
    };
    const closeModals = () => {
        setLoginModalOpen(false);
        setRegisterModalOpen(false);
    };
    return (
        <HeaderContainer>
            <Logo />
            
            <nav>
                <StyledNavigation to="/">Home</StyledNavigation>
                <StyledNavigation to="/teachers">Teachers</StyledNavigation>
                <StyledNavigation to="/favorites">Favorites</StyledNavigation>
            </nav>
            

            <div>
                <button onClick={openLoginModal}>Log in</button>
                <button onClick={openRegisterModal}>Register</button>

            </div>

            {LoginModalOpen && <LoginModal onClose={closeModals} />}
            {RegisterModalOpen && <RegistrationModal onClose={closeModals} />}

        </HeaderContainer>
    );
  };