import {  Formik, Form } from 'formik';
import * as Yup from 'yup';
import { EyeSvg, FormBtn, FormField, FormFieldPassvord, FormFieldPassvordConteiner, FormFields } from './LoginAndRegisterStyled/Form.styled';
import { useState } from 'react';
import sprite from '../../img/svg-file.svg';


const initialValues = {
  name: '',
  email: '',
  password: '',
};
  
const schema = Yup.object({
  name: Yup.string().required('Required').min(2, ""),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required').min(6, "Password must be at least 6 characters"),
});

export default function RegistrationForm({ onSubmit }) {

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    if (showPassword === false) {
      setShowPassword(true);
    }
    if (showPassword === true) {
      setShowPassword(false);
    }
  };
  
  const handleSubmit = async (values, {resetForm}) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    resetForm();
    alert(JSON.stringify(values, null, 2));
  }
  
  return (
    <div className="App">
      <Formik  initialValues = {initialValues} validationSchema={schema} onSubmit={handleSubmit} >

        {({ errors, touched }) => (
          <Form>
            <FormFields>              

                <FormField name="name" type="name" placeholder="Name" style={{
                    borderColor:
                        errors.email && touched.password ? "red" : null,
                    }} 
                />
                <FormField name="email" type="email" placeholder="Email" style={{
                    borderColor:
                        errors.email && touched.password ? "red" : null,
                    }} 
                />
                {/* <ErrorMessage name="email" component='div' /> */}
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
                {/* <ErrorMessage name="password" component='div' /> */}
                </FormFieldPassvordConteiner>

                <FormBtn type="submit">Sign Up</FormBtn>

            </FormFields>
          </Form>
        )}
      </Formik>
    </div>

  );
};
  