import React, { useEffect, useState } from 'react';
import {  Formik, Form } from 'formik';
import * as Yup from 'yup';
import sprite from '../../img/svg-file.svg';
import { BtnClose, CheckBoxActive, CheckBoxActiveWrapper, FormGroup, GreenRadio, LabelRadio,  ModalTextTrail, ModalTitle, TitleOfRadioBtns, WrapperModalTrail, YourTeacher, YourTeacherBlock, YourTeacherImg, YourTeacherNane } from './LoginAndRegisterStyled/Modal.styled';
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
    const [selectedOption, setSelectedOption] = useState(null);
    const [modalTop, setModalTop] = useState('50%');

    useEffect(() => {
      const handleResize = () => {
        const modalHeight = document.getElementById('modal').offsetHeight;
        const viewportHeight = window.innerHeight;
  
        if (modalHeight > viewportHeight) {
          setModalTop('0');
        } else {
          setModalTop('50%');
        }
      };
  
      window.addEventListener('resize', handleResize);
      handleResize();
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    // const handleRadioChange = (value) => {
    //     setSelectedOption(value);
    //   };

  return (
    // <Modal>
        <WrapperModalTrail style={{ top: modalTop }} id="modal">
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
                    onSubmit={async (values, {resetForm, setFieldValue}) => {
                        await new Promise((r) => setTimeout(r, 500));
                        setFieldValue('picked', values.picked);
                        resetForm();
                        // alert(JSON.stringify(values, null, 2));
                     
                        setSelectedOption(values.picked)
                        closeModals()
                    }}
                >
                    {({ errors, touched, setFieldValue }) => (
                        <Form>
                            <TitleOfRadioBtns id="my-radio-group">What is your main reason for learning English?</TitleOfRadioBtns>
                            <FormGroup role="group" aria-labelledby="my-radio-group">
                                <LabelRadio>
                                {selectedOption === 'careerBusiness' &&
                                    <CheckBoxActiveWrapper>
                                        <CheckBoxActive></CheckBoxActive>
                                    </CheckBoxActiveWrapper>
                                 }   
                                    <GreenRadio type="radio" name="picked" value="Career and business"  onChange={() => {
                                        setFieldValue('picked', 'careerBusiness');
                                        setSelectedOption('careerBusiness')}}/>
                                    
                                    Career and business
                                </LabelRadio>
                                <LabelRadio>
                                {selectedOption === 'lessonForKids' &&
                                    <CheckBoxActiveWrapper>
                                        <CheckBoxActive></CheckBoxActive>
                                    </CheckBoxActiveWrapper>
                                     }
                                    <GreenRadio type="radio" name="picked" value="Lesson for kids" onChange={() => {
                                        setFieldValue('picked', 'lessonForKids');
                                        setSelectedOption('lessonForKids')}} />
                                    Lesson for kids
                                </LabelRadio>
                                <LabelRadio>
                                {selectedOption === 'livingAbroad' &&
                                    <CheckBoxActiveWrapper>
                                        <CheckBoxActive></CheckBoxActive>
                                    </CheckBoxActiveWrapper>
                                 }
                                    <GreenRadio type="radio" name="picked" value="Living abroad"  onChange={() => {
                                        setFieldValue('picked', 'livingAbroad');
                                        setSelectedOption('livingAbroad')}} />
                                    Living abroad
                                </LabelRadio>
                                <LabelRadio>
                                    {selectedOption === 'exams' &&
                                        <CheckBoxActiveWrapper>
                                            <CheckBoxActive></CheckBoxActive>
                                        </CheckBoxActiveWrapper>
                                     }
                                    <GreenRadio type="radio" name="picked" value="Exams and coursework" onChange={() => {
                                        setFieldValue('picked', 'exams');
                                        setSelectedOption('exams')}}  />
                                    Exams and coursework
                                </LabelRadio>
                                <LabelRadio>
                                    {selectedOption === 'culture' &&
                                        <CheckBoxActiveWrapper>
                                            <CheckBoxActive></CheckBoxActive>
                                        </CheckBoxActiveWrapper>
                                     }
                                    <GreenRadio type="radio" name="picked" value="Culture, travel or hobby"  onChange={() => {
                                        setFieldValue('picked', 'culture');
                                        setSelectedOption('culture')}} />
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
    // </Modal>
  );
}
