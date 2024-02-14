import React from 'react';
import {  Formik, Form } from 'formik';
import * as Yup from 'yup';
import sprite from '../../img/svg-file.svg';
import { BtnClose, FormGroup, GreenRadio, LabelRadio, Modal,  ModalTextTrail, ModalTitle, TitleOfRadioBtns, WrapperModalTrail, YourTeacher, YourTeacherBlock, YourTeacherImg, YourTeacherNane } from './LoginAndRegisterStyled/Modal.styled';
import {  FormBtn, FormField, FormFieldPassvord, FormFields } from './LoginAndRegisterStyled/Form.styled';
import { ErrorMessagePassword, ErrorMessageStyled } from 'components/TechersPage/TeachersPage.styled';

const initialValues = {
    picked: '',
    name: '',
    email: '',
    tel: '',
  };
const schema = Yup.object({
    picked:Yup.string().required('Required'),
    name: Yup.string().required('Required').min(2, "The name must have at least 2 letters"),
    email: Yup.string().email('Invalid email address').required('Required'),
    tel: Yup.string().required('Required')
    .matches(/^[0-9]{10}$/, 'Phone number must contain exactly 10 digits'),
  });

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


            <div>   
                <Formik
                    initialValues={initialValues}
                    validationSchema={schema}
                    onSubmit={async (values) => {
                        await new Promise((r) => setTimeout(r, 500));
                        alert(JSON.stringify(values, null, 2));
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <TitleOfRadioBtns id="my-radio-group">What is your main reason for learning English?</TitleOfRadioBtns>
                            <FormGroup role="group" aria-labelledby="my-radio-group">
                                <LabelRadio>
                                    <GreenRadio type="radio" name="picked" value="Career and business" />
                                    Career and business
                                </LabelRadio>
                                <LabelRadio>
                                    <GreenRadio type="radio" name="picked" value="Lesson for kids" />
                                    Lesson for kids
                                </LabelRadio>
                                <LabelRadio>
                                    <GreenRadio type="radio" name="picked" value="Living abroad" />
                                    Living abroad
                                </LabelRadio>
                                <LabelRadio>
                                    <GreenRadio type="radio" name="picked" value="Exams and coursework" />
                                    Exams and coursework
                                </LabelRadio>
                                <LabelRadio>
                                    <GreenRadio type="radio" name="picked" value="Culture, travel or hobby" />
                                    Culture, travel or hobby
                                </LabelRadio>
                                </FormGroup>
                                <ErrorMessagePassword name='picked' component='div' />

                            <FormFields>        

                                <FormField name="name" type="name" placeholder="Full Name" style={{
                                    borderColor:
                                        errors.name && touched.name ? "red" : null,
                                    }}
                                />
                                <ErrorMessageStyled name="name" component='div' />

                                <FormField name="email" type="email" placeholder="Email" style={{
                                    borderColor:
                                        errors.email && touched.email ? "red" : null,
                                    }}  
                                />
                                <ErrorMessageStyled name="email" component='div' />               

                                <FormFieldPassvord  name="tel" type="tel" placeholder="Phone number"  style={{
                                    borderColor:
                                        errors.tel && touched.tel ? "red" : null,
                                    }} 
                                />               
                                <ErrorMessagePassword name="tel" component='div' />
                
                            </FormFields>

                            <FormBtn type="submit">Submit</FormBtn>
                        </Form>
                    )}
                </Formik>
            </div>
        </WrapperModalTrail>
    </Modal>
  );
}
