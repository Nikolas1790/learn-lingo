import { BtnClose, ModalText, ModalTitle, WrapperModal } from "./LoginAndRegisterStyled/Modal.styled";
import sprite from '../../img/svg-file.svg';
import LoginForm from "./LoginForm";
import { useEffect } from "react";

export default function LoginModal({closeModals}) {
  useEffect(() => {
    
    const closeModalOnEscape = (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        closeModals();
      }
    };
  
    document.addEventListener('keydown', closeModalOnEscape);
  
    return () => {
      document.removeEventListener('keydown', closeModalOnEscape);
    };
  }, [closeModals]);

    return (
        <WrapperModal>
          <BtnClose onClick={closeModals}>
            <svg width={32} height={32}  >
              <use href={`${sprite}#icon-x`} />
            </svg>
          </BtnClose>

          <ModalTitle>Log In</ModalTitle>
          <ModalText>Welcome back! Please enter your credentials to access your account and continue your search for an teacher.</ModalText>

          <LoginForm closeModals={closeModals}/>          
        </WrapperModal>
    );
}