import { Logo } from "components/Logo/Logo";
import {  HeaderContainer, HeaderNav, StyledNavigation } from "./Header.styled";
import {  useState } from "react";
import LoginModal from "components/LoginAndRegisterModal/LoginModal";
import RegistrationModal from "components/LoginAndRegisterModal/RegistrationModal";
import LogOutBlock from "components/LogInLogOutBlock/LogOutBlock";
import { useAuth } from "components/AuthProvider/AuthProvider";
import LogInBlock from "components/LogInLogOutBlock/LogInBlock";
import PortalModal from "components/PortalModal/PortalModal";

export default function Header() {
    const [modalActive, setModalActive] = useState(false);

    // const [loginModalOpen, setLoginModalOpen] = useState(false);
    const [registerModalOpen, setRegisterModalOpen] = useState(false);

    const { authUser, loading } = useAuth();
 
    const openLoginModal = () => {
        // setLoginModalOpen(true);
        setModalActive(true)
        setRegisterModalOpen(false); // Закрываем окно регистрации, если открыто
    };

    const openRegisterModal = () => {
        setRegisterModalOpen(true);
        // setLoginModalOpen(false); // Закрываем окно логина, если открыто
    };
    const closeModals = () => {
        // setLoginModalOpen(false);
        setRegisterModalOpen(false);
        setModalActive(false)
    };
    return (
        <HeaderContainer>
            <Logo />
            
            <HeaderNav>
                <StyledNavigation to="/">Home</StyledNavigation>
                <StyledNavigation to="/teachers">Teachers</StyledNavigation>                
                { authUser && <StyledNavigation to="/favorites">Favorites</StyledNavigation>}
            </HeaderNav>

            {/* {loginModalOpen && <LoginModal closeModals={closeModals} />} */}
            {registerModalOpen && <RegistrationModal closeModals={closeModals} />}

           { loading ? null : authUser ?
            <LogOutBlock /> :
            <LogInBlock openLoginModal={openLoginModal} openRegisterModal={openRegisterModal}/>}




        <PortalModal active={modalActive} setActive={setModalActive}>
            <LoginModal closeModals={closeModals}   />
        </PortalModal>


        {/* <PortalModal active={modalActive} setActive={setModalActive}>
            <LoginModal closeModals={() => setModalActive()}   />
        </PortalModal> */}


        </HeaderContainer>
    );
  };