import { BtnClose, LoginModalText, LoginModalTitle, Modal, WrapperLoginModal } from "./LoginAndRegisterStyled/Modal.styled";
import sprite from '../../img/svg-file.svg';
import LoginForm from "./LoginForm";

export default function LoginModal({closeModals}) {

  const handleLogin = (values) => {
    // Реализуйте логику для отправки данных на сервер или другую необходимую обработку
    console.log(values);
    closeModals();
  };
  
    return (
      <Modal>
        <WrapperLoginModal>
          <BtnClose onClick={closeModals}>
            <svg width={32} height={32}  >
              <use href={`${sprite}#icon-x`} />
            </svg>
          </BtnClose>

          <LoginModalTitle>Log In</LoginModalTitle>
          <LoginModalText>Welcome back! Please enter your credentials to access your account and continue your search for an teacher.</LoginModalText>

          <LoginForm onSubmit={handleLogin}/>          
        </WrapperLoginModal>
      </Modal>
    );
}