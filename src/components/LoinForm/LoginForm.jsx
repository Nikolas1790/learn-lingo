import {  Formik, Field, Form } from 'formik';
// import * as Yup from 'yup';

// const initialValues = {
//     email: '',
//     password: '',
// };
  
// const validationSchema = Yup.object({
//     email: Yup.string()
//     .email('Invalid email address')
//     .required('Required'),
//     password: Yup.string()
//     .required('Required')
//     .min(8, "Password must be at least 8 characters"),
// });

export default function LoginForm({ onSubmit }) {
    // const formik = useFormik({
    //   initialValues,
    //   validationSchema,
    //   onSubmit,
    // });
  
    return (
        <div className="App">
        <Formik
           validationSchema
          initialValues
          onSubmit={async (values) => {
            await new Promise((resolve) => setTimeout(resolve, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            <Field id="email" name="email" type="text" placeholder="Email"/>
            <Field id="password" name="password" type="email" placeholder="Password" />
            <button type="submit">Log In</button>
          </Form>
        </Formik>
      </div>

    //   <form onSubmit={formik.handleSubmit}>
    //     <input
    //       type="text"
    //       id="email"
    //       name="email"
    //       onChange={formik.handleChange}
    //       onBlur={formik.handleBlur}
    //       value={formik.values.email}
    //     />
    //     {formik.touched.email && formik.errors.email ? (
    //       <div>{formik.errors.email}</div>
    //     ) : null}
  
        
    //     <input
    //       type="password"
    //       id="password"
    //       name="password"
    //       onChange={formik.handleChange}
    //       onBlur={formik.handleBlur}
    //       value={formik.values.password}
    //     />
    //     {formik.touched.password && formik.errors.password ? (
    //       <div>{formik.errors.password}</div>
    //     ) : null}
  
    //     <button type="submit">Submit</button>
    //   </form>

      
    );
  };
  