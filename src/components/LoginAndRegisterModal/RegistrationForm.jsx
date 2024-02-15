import {  Formik, Form } from 'formik';
import * as Yup from 'yup';
import { EyeSvg, FormBtn, FormField, FormFieldPassvord, FormFieldPassvordConteiner, FormFields } from './LoginAndRegisterStyled/Form.styled';
import { useState } from 'react';
import sprite from '../../img/svg-file.svg';
import { EmailErrorMessage, ErrorMessagePassword, ErrorMessageStyled } from 'components/TechersPage/TeachersPage.styled';
import {  createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase';

const initialValues = {
  name: '',
  email: '',
  password: '',
};
  
const schema = Yup.object({
  name: Yup.string().required('Required').min(2, "The name must have at least 2 letters"),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required').min(6, "Password must be at least 6 characters"),
});

export default function RegistrationForm({ onSubmit, closeModals }) {
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
    // if (showPassword === false) {
    //   setShowPassword(true);
    // }
    // if (showPassword === true) {
    //   setShowPassword(false);
    // }
  };  
  const handleSubmit = async (values, {resetForm}) => {
    // await new Promise((resolve) => setTimeout(resolve, 500));
    // resetForm();
    // console.log(values)
    try{
    const userCredential = await createUserWithEmailAndPassword(auth,  values.email, values.password);  

      await updateProfile(userCredential.user, {
        displayName: values.name,
      });

      resetForm();
      closeModals()
    } catch (e)  {
      // console.log(e)
      if (e.code === 'auth/email-already-in-use') {
        setEmailError('This email is in the database');
      } else {
        setEmailError('Something went wrong, please try again');
      }
      // alert(" Такой мейл есть в базе")
    }
    // alert(JSON.stringify(values, null, 2));
  }
  
  return (
    <div className="App">
      <Formik  initialValues = {initialValues} validationSchema={schema} onSubmit={handleSubmit} >

        {({ errors, touched }) => (
          <Form>
            <FormFields>              

                <FormField name="name" type="name" placeholder="Name" style={{
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
                <ErrorMessageStyled name="email" component='div' ></ErrorMessageStyled>

                {emailError && (
                  <EmailErrorMessage >{emailError}</EmailErrorMessage>
                )}

                <FormFieldPassvordConteiner>
                  <FormFieldPassvord  name="password" type={showPassword ? "text" : "password"} placeholder="Password" style={{
                        borderColor:
                          errors.password && touched.password ? "red" : null,
                  }} />

                  {showPassword ? (
                  <EyeSvg
                    width={20}
                    height={20}
                    onClick={togglePasswordVisibility}
                  >
                    <use href={`${sprite}#icon-eye`} />
                  </EyeSvg>
                    ) : (
                  <EyeSvg
                    width={20}
                    height={20}
                    onClick={togglePasswordVisibility}
                  >
                    <use href={`${sprite}#icon-eye-off`} />
                  </EyeSvg>
                  )}
                <ErrorMessagePassword name="password" component='div' />
                </FormFieldPassvordConteiner>

                <FormBtn type="submit">Sign Up</FormBtn>

            </FormFields>
          </Form>
        )}
      </Formik>
    </div>

  );
};
  