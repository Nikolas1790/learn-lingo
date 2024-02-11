import { Modal, WrapperLoginModal } from "./LoginModal.styled";

export default function LoginModal() {
    return (
      <Modal>
        <WrapperLoginModal>
          <h2>Log In</h2>
          <p>Welcome back! Please enter your credentials to access your account and continue your search for an teacher.</p>
        </WrapperLoginModal>
      </Modal>
    );
}