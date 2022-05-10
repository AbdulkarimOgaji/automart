import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string().required("This field is required"),
  lastName: Yup.string().required("This field is required"),
  phoneNum: Yup.number().required("This field is required"),
  email: Yup.string()
    .required("This field is required")
    .email("Email must be valid"),
  password: Yup.string().required("This field is required").min(6),
});

const initialValues = {
  firstName: "",
  lastName: "",
  phoneNum: "",
  email: "",
  password: "",
};

const Register = () => {
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
          <h1 className="text-center mb-5">Register</h1>
          <div className="d-flex justify-content-between align-items-end">
            <h5>First Name</h5>
            <Field
              name="firstName"
              placeholder="First Name"
              className="p-1"
              style={{ width: "70%" }}
            />
          </div>
          <div className="text-danger mb-4">
            <ErrorMessage name="firstName" />
          </div>

          <div className="d-flex justify-content-between align-items-end">
            <h5>Last Name</h5>
            <Field
              name="lastName"
              placeholder="First Name"
              className="p-1"
              style={{ width: "70%" }}
            />
          </div>

          <div className="text-danger mb-4">
            <ErrorMessage name="lastName" />
          </div>

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
            <h5>Phone Number</h5>
            <Field
              name="phoneNum"
              placeholder="Phone Number"
              className="p-1"
              type="number"
              style={{ width: "70%" }}
            />
          </div>
          <div className="text-danger mb-4">
            <ErrorMessage name="phoneNum" />
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

export default Register;
