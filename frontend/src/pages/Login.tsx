import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string()
    .required("This field is required")
    .email("Email must be valid"),
  password: Yup.string().required("This field is required").min(6),
});

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const handleSubmit = () => {};

  return (
    <div className=" navbar-height d-flex align-items-center justify-content-center min-vh-100">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form
          className="bg-light p-5 text-black"
          style={{ width: "min(80%, 600px)" }}
        >
          <h1 className="text-center mb-5">Login</h1>
          
          <div className="d-flex justify-content-between align-items-end">
            <h5>Email </h5>
            <Field
              name="email"
              placeholder="First Name"
              className="p-1"
              style={{ width: "70%" }}
            />
          </div>

          <div className="text-danger mb-4">
            <ErrorMessage name="email" />
          </div>

         
          <div className="d-flex justify-content-between align-items-end">
            <h5>Password</h5>
            <Field
              name="password"
              placeholder="Password"
              className="p-1"
              type="password"
              style={{ width: "70%" }}
            />
          </div>
          <div className="text-danger mb-4">
            <ErrorMessage name="password" />
          </div>

          <div className="text-center">
            <button className="btn-links py-2 px-4 rounded-pill border-0">
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
