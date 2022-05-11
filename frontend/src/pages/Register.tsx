import { Formik, Form, Field, ErrorMessage, FormikValues } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { loginRequest, UserState } from "../features/user/userSlice";

interface ResponseType {
  status: string;
  data: UserState['data'];
  token: string;
}

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
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const handleSubmit = async(values: FormikValues) => {
    const body = {
      email: values.email,
      password: values.password,
      firstName: values.firstName,
      lastName: values.lastName,
      phoneNum: values.phoneNum,
    }
    const resp = await fetch('http://localhost:8000/user/create', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(body)
    })
    const respData: ResponseType = await resp.json()
    if (respData.status === 'success') {
      dispatch(loginRequest({data: respData.data, token: respData.token}))
      alert('sign up successful')
      navigate('/dashboard')

    }else {
      alert('sign up Failed')
      navigate('/')
    }
    
  };

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
