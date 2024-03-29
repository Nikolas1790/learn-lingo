import {  Formik, Form } from 'formik';
import * as Yup from 'yup';
import { EyeSvg, FormBtn, FormField, FormFieldPassvord, FormFieldPassvordConteiner, FormFields } from './LoginAndRegisterStyled/Form.styled';
import { useState } from 'react';
import sprite from '../../img/svg-file.svg';
import { EmailErrorMessage, ErrorMessagePassword, ErrorMessageStyled } from 'components/TechersPage/TeachersPage.styled';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

const initialValues = {
  email: '',
  password: '',
};
  
const schema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required').min(6, "Password must be at least 6 characters"),
});

export default function LoginForm({ onSubmit, closeModals }) {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);

  };
  
  const handleSubmit = async (values, {resetForm}) => {
    signInWithEmailAndPassword(auth,  values.email, values.password)
    .then(()=>{
      resetForm();
      closeModals()
    })
    .catch((e) => {
      setError("Sorry couldn`t find your account")
      resetForm();
    })
  }
  
  return (
    <div className="App">
      <Formik  initialValues = {initialValues} validationSchema={schema} onSubmit={handleSubmit} >

        {({ errors, touched }) => (
          <Form>
            <FormFields> 
              <FormField name="email" type="email" placeholder="Email" error={errors.email && touched.email ? "true" : "false" }/>
                <ErrorMessageStyled name="email" component='div' />

                <FormFieldPassvordConteiner>
                  <FormFieldPassvord  name="password" type={showPassword ? "text" : "password"} placeholder="Password" error={errors.password && touched.password ? "true" : "false"} />

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

                {error && <EmailErrorMessage >{error}</EmailErrorMessage>}
              <FormBtn type="submit">Log In</FormBtn>
            </FormFields>
          </Form>
        )}
      </Formik>
    </div>
  );
};
  