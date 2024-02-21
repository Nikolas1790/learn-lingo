import { BtnClose, ModalText, ModalTitle, WrapperModal } from "./LoginAndRegisterStyled/Modal.styled";
import sprite from '../../img/svg-file.svg';
import RegistrationForm from "./RegistrationForm";

export default function RegistrationModal({closeModals}) {

  const handleLogin = (values) => {
    // Реализуйте логику для отправки данных на сервер или другую необходимую обработку
    console.log(values);
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

      <ModalTitle>Registration</ModalTitle>
      <ModalText>Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.</ModalText>

      <RegistrationForm onSubmit={handleLogin} closeModals={closeModals}/>          
    </WrapperModal>
    // </Modal>
  );
}


