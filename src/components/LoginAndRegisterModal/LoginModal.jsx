import { BtnClose, ModalText, ModalTitle, WrapperModal } from "./LoginAndRegisterStyled/Modal.styled";
import sprite from '../../img/svg-file.svg';
import LoginForm from "./LoginForm";
import { useEffect } from "react";

export default function LoginModal({closeModals}) {
  useEffect(() => {
    
    const closeModalOnEscape = (e) => {
      if (e.key === 'Escape') {
        // console.log("ggggggggggggg")
        e.stopPropagation();
        closeModals();
      }
    };
  
    document.addEventListener('keydown', closeModalOnEscape);
  
    return () => {
      document.removeEventListener('keydown', closeModalOnEscape);
    };
  }, [closeModals]);

  const handleLogin = (values) => {
    // Реализуйте логику для отправки данных на сервер или другую необходимую обработку
    // console.log(values);
    closeModals();
  };
  
    return (
      // <Modal>
        <WrapperModal>
          <BtnClose onClick={closeModals}>
            <svg width={32} height={32}  >
              <use href={`${sprite}#icon-x`} />
            </svg>
          </BtnClose>

          <ModalTitle>Log In</ModalTitle>
          <ModalText>Welcome back! Please enter your credentials to access your account and continue your search for an teacher.</ModalText>

          <LoginForm onSubmit={handleLogin} closeModals={closeModals}/>          
        </WrapperModal>
      // </Modal>
    );
}