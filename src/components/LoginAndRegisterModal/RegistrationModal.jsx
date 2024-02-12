import { BtnClose, LoginModalText, LoginModalTitle, Modal, WrapperModal } from "./LoginAndRegisterStyled/Modal.styled";
// import LoginForm from "components/LoinForm/LoginForm";
import sprite from '../../img/svg-file.svg';
import RegistrationForm from "./RegistrationForm";

export default function RegistrationModal({closeModals}) {

  const handleLogin = (values) => {
    // Реализуйте логику для отправки данных на сервер или другую необходимую обработку
    console.log(values);
    closeModals();
  };

  return (
    <Modal>
    <WrapperModal>
      <BtnClose onClick={closeModals}>
        <svg width={32} height={32}  >
          <use href={`${sprite}#icon-x`} />
        </svg>
      </BtnClose>

      <LoginModalTitle>Registration</LoginModalTitle>
      <LoginModalText>Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.</LoginModalText>

      <RegistrationForm onSubmit={handleLogin}/>          
    </WrapperModal>
    </Modal>
  );
}


