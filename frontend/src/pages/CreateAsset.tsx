import React from "react";
import * as Yup from "yup";
import { Formik, Form, ErrorMessage, Field, FormikValues } from "formik";
import { UserState } from "../features/user/userSlice";
import { useAppSelector } from "../app/hooks";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  type: Yup.string()
    .required("This field is required")
    .oneOf(["CAR", "MOTORCYCLE", "TRUCK"], "Invalid type"),
  model: Yup.string().required("This field is required"),
  price: Yup.number().required("This field is required"),
});

const initialValues = {
  type: "CAR",
  model: "",
  price: "",
};

interface ResponseType {
  status: string;
  data: UserState["data"];
  token: string;
}
const CreateAsset = () => {
  const navigate = useNavigate();
  const token = useAppSelector((state) => state.user.accessToken);
  const handleSubmit = async (values: FormikValues) => {
    const body = {
      type: values.type,
      model: values.model,
      price: values.price,
    };
    const resp = await fetch("http://localhost:8000/automobile", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      method: "POST",
      body: JSON.stringify(body),
    });
    const respData: ResponseType = await resp.json();
    if (respData.status === "success") {
      alert("created successfully");
      navigate("/dashboard");
    } else if (respData.status === 'unauthorized') {
      alert('you have to login first')
      navigate('/login')
    }else {
      alert("create Failed");
      navigate("/dashboard");
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
          <h1 className="text-center mb-5">Add Automobile For Sale</h1>
          <div className="d-flex justify-content-between align-items-end">
            <h5>Type</h5>
            <Field
              as="select"
              name="type"
              className="p-1"
              style={{ width: "70%" }}
            >
              <option value="CAR">CAR</option>
              <option value="MOTORCYCLE">MOTORCYCLE</option>
              <option value="TRUCK">TRUCK</option>
            </Field>
          </div>
          <div className="text-danger mb-4">
            <ErrorMessage name="type" />
          </div>

          <div className="d-flex justify-content-between align-items-end">
            <h5>Model</h5>
            <Field
              name="model"
              placeholder="Model"
              className="p-1"
              style={{ width: "70%" }}
            />
          </div>

          <div className="text-danger mb-4">
            <ErrorMessage name="model" />
          </div>

          <div className="d-flex justify-content-between align-items-end">
            <h5>Price </h5>
            <Field
              name="price"
              type="number"
              placeholder="0"
              className="p-1"
              style={{ width: "70%" }}
            />
          </div>

          <div className="text-danger mb-4">
            <ErrorMessage name="price" />
          </div>

          <div className="d-flex justify-content-between align-items-end mb-4">
            <h5>Image</h5>
            <input
              type="file"
              accept="image/*"
              className="p-1"
              style={{ width: "70%" }}
            />
          </div>
          <div className="text-center">
            <button className="btn-links py-2 px-4 rounded-pill border-0">
              Create
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateAsset;
