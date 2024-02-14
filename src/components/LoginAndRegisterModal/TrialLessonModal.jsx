
// import RegistrationForm from 'components/LoginAndRegisterModal/RegistrationForm';
import sprite from '../../img/svg-file.svg';
import { BtnClose, Modal,  ModalTextTrail, ModalTitle, TitleOfRadioBtns, WrapperModalTrail, YourTeacher, YourTeacherBlock, YourTeacherImg, YourTeacherNane } from './LoginAndRegisterStyled/Modal.styled';

export default function TrialLessonModal({closeModals, fullName, img}) {

//   const handleLogin = (values) => {
//     // Реализуйте логику для отправки данных на сервер или другую необходимую обработку
//     console.log(values);
//     closeModals();
//   };

  return (
    <Modal>
        <WrapperModalTrail>
            <BtnClose onClick={closeModals}>
                <svg width={32} height={32}  >
                    <use href={`${sprite}#icon-x`} />
                </svg>
            </BtnClose>

            <ModalTitle>Book trial lesson</ModalTitle>
            <ModalTextTrail>Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs.</ModalTextTrail>

            <YourTeacherBlock>
                <YourTeacherImg alt={fullName} src={img} />
                <div>
                    <YourTeacher>Your teacher</YourTeacher>
                    <YourTeacherNane>{fullName}</YourTeacherNane>
                </div>                
            </YourTeacherBlock>

            <TitleOfRadioBtns>What is your main reason for learning English?</TitleOfRadioBtns>

            {/* <RegistrationForm onSubmit={handleLogin}/> */}
        </WrapperModalTrail>
    </Modal>
  );
}
