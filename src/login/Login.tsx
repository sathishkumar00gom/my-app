import { useFormik } from "formik";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./login.css";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postloginusers } from "../reduxtoolkit/slice";
import { Admin } from "../Utilise/Adminuser";
import { AppDispatch } from "../reduxtoolkit/store";

export interface Values{
  email:string;
  password:string;
}

const Login = () => {
  const dispatch :AppDispatch= useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
    }),

    onSubmit: (values: Values) => {
      const getuser = localStorage.getItem("user");
      const getuserdetail = JSON.parse(getuser || "{}");
      console.log(getuserdetail[0]?.email, "getuserdetail");
      console.log(values, "valuess");

      if (Admin(getuserdetail, values)) {
        dispatch(postloginusers(values));
        navigate("/admin");
      } else if (
        getuserdetail[0]?.email === values?.email &&
        getuserdetail[0]?.password === values?.password
      ) {
        dispatch(postloginusers(values));
        navigate("/");
      }
    },
  });

  const handleNavigate = () => {
    navigate("/signup");
  };

  return (
    <div className="container main">
      <div className="row div">
        <h1
          style={{ color: "white", display: "flex", justifyContent: "center" }}
        >
          Login Form
        </h1>
        <div className="col-lg-6">
          <img
            className="img-fluid"
            src="https://v3img.voot.com/resizeMedium,w_540,h_303/kimg/kimg/2185a5ac90174c76921a4e505300c69b_1280X720.jpg
          "
          />
        </div>
        <div className="col-lg-6">
          <p>{error}</p>
          <Form onSubmit={formik.handleSubmit} autoComplete="off">
            <Form.Label>email</Form.Label>
            <Form.Control
              type="text"
              placeholder="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              name="email"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-danger">{formik.errors.email}</div>
            ) : null}
            <Form.Label>password</Form.Label>
            <Form.Control
              type="password"
              placeholder="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              name="password"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-danger">{formik.errors.password}</div>
            ) : null}

            <div className="d-flex ms-2">
              <Button className="mt-5 " type="submit">
                Submit
              </Button>
              <Button
                className="mt-5 btn-danger ms-5"
                type="submit"
                onClick={handleNavigate}
              >
                Signup
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
