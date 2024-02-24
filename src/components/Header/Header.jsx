import { Logo } from "components/Logo/Logo";
import {  HeaderContainer, HeaderNav, StyledNavigation} from "./Header.styled";
import {  useState } from "react";
import LoginModal from "components/LoginAndRegisterModal/LoginModal";
import RegistrationModal from "components/LoginAndRegisterModal/RegistrationModal";
import LogOutBlock from "components/LogInLogOutBlock/LogOutBlock";
import { useAuth } from "components/AuthProvider/AuthProvider";
import LogInBlock from "components/LogInLogOutBlock/LogInBlock";
import PortalModal from "components/PortalModal/PortalModal";
import MobileMenuComponent from "components/MobileMenu/MobileMenu";

export default function Header() {
    const [modalActive, setModalActive] = useState(false);
    const [registerModalOpen, setRegisterModalOpen] = useState(false);

    const { authUser, loading } = useAuth();
 
    const openLoginModal = () => {
        setModalActive(true)
        setRegisterModalOpen(false);
    };

    return (
        <HeaderContainer >
            <Logo />
            
            <HeaderNav>
                <StyledNavigation to="/">Home</StyledNavigation>
                <StyledNavigation to="/teachers">Teachers</StyledNavigation>                
                { authUser && <StyledNavigation to="/favorites">Favorites</StyledNavigation>}
            </HeaderNav>

            { loading ? null : authUser ?
            <LogOutBlock /> :
            <LogInBlock openLoginModal={openLoginModal} openRegisterModal={() => setRegisterModalOpen(true)}/>}

            <MobileMenuComponent />

            <PortalModal active={registerModalOpen} setActive={setRegisterModalOpen}>
                <RegistrationModal closeModals={() => setRegisterModalOpen()} />
            </PortalModal>
            <PortalModal active={modalActive} setActive={setModalActive}>
                <LoginModal closeModals={() => setModalActive()} />
            </PortalModal>
        </HeaderContainer>
    );
};