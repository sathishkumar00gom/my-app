import React from "react";
import Buttons from "../resued components/Buttons";
import Input from "../resued components/Input";
import { Formik, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { Container, Row, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface Main {
  minHeight: string;
  backgroundColor: string;
  borderRadius: string;
  opacity: string;

  alignItems: string;
  padding: string;
  boxShadow: string;
  color: string;
}

interface Inputs {
  color: string;
}

interface Labels {
  color: string;
  width: string;
  marginLeft: string;
  marginTop: string;
}

interface Butons {
  width: string;
  marginLeft: string;
  marginTop: string;
}

const main: Main = {
  minHeight: "85vh",

  alignItems: "center",
  backgroundColor: "black",
  opacity: "0.8",
  padding: "50px 20px",
  borderRadius: "10px",
  boxShadow: "10px 20px 50px grey",
  color: "white",
};

const button: Butons = {
  width: "",
  marginLeft: "",
  marginTop: "",
};

const Signup: React.FC = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      confirmpassword: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      localStorage.setItem("user", JSON.stringify([values]));
      navigate("/login");
    },
  });
  return (
    <div className="container">
      <div style={main} className="mt-5 mb-5">
        <h1 style={{ color: "white" }}>Sign Up</h1>
        <Row>
          <div
            className="col-lg-6 col-md-6"
            style={{ justifyContent: "center" }}
          >
            <img
              src="https://v3img.voot.com/resizeHigh,w_1280,h_720/v3Storage/assets/apaharan-2-16x9-1662432833928.jpg"
              className="img-fluid"
            />
          </div>
          <div className="col-lg-5 col-md-6">
            <Form onSubmit={formik.handleSubmit}>
              <Form.Label>user name</Form.Label>
              <Form.Control
                name="username"
                type="text"
                placeholder="username"
                onChange={formik.handleChange}
                value={formik.values.username}
              />
              {formik.touched.username && formik.errors.username ? (
                <div className="text-danger">{formik.errors.username}</div>
              ) : null}
              <Form.Label>email</Form.Label>
              <Form.Control
                name="email"
                type="text"
                placeholder="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-danger">{formik.errors.email}</div>
              ) : null}
              <Form.Label>password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-danger">{formik.errors.password}</div>
              ) : null}
              <Form.Label>confirmpassword</Form.Label>
              <Form.Control
                name="confirmpassword"
                type="password"
                placeholder="confirm password"
                onChange={formik.handleChange}
                value={formik.values.confirmpassword}
              />
              {formik.touched.confirmpassword &&
              formik.errors.confirmpassword ? (
                <div className="text-danger">
                  {formik.errors.confirmpassword}
                </div>
              ) : null}
              <Button
                className="mt-5 d-flex justify-content-center mx-auto"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </div>
        </Row>
      </div>
    </div>
  );
};

export default Signup;
