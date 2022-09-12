import React from "react";
import Buttons from "../resued components/Buttons";
import Input from "../resued components/Input";
import { useFormik } from "formik";
import * as Yup from "yup";

interface Main {
  width: string;
  height: string;
  backgroundColor: string;
  marginLeft: string;
  marginTop: string;
  borderRadius: string;
  opacity: string;
  boxShadow: string;
}

interface Inputs {
  color: string;
  width: string;
  marginLeft: string;
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
  width: "30%",
  height: "80vh",
  backgroundColor: "black",
  opacity: "0.8",
  marginLeft: "35%",
  marginTop: "5%",
  borderRadius: "10px",
  boxShadow: "10px 20px 50px grey",
};

const input: Inputs = {
  width: "70%",
  marginLeft: "15%",
  color: "",
};

const inputs: Labels = {
  color: "white",
  width: "70%",
  marginLeft: "15%",
  marginTop: "30px",
};

const button: Butons = {
  marginLeft: "21%",
  width: "50%",
  marginTop: "75px",
};

const Login: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "password must be atleast 8 letters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div style={main}>
      <form onSubmit={formik.handleSubmit}>
        <h1 style={{ color: "white", marginLeft: "50px", marginTop: "20%" }}>
          Sign in
        </h1>

        <Input
          style={input}
          type="email"
          placeholder="enter your email address"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          name="email"
          label="email address"
        />
        <span style={{ color: "white", marginLeft: "20px" }}>
          {" "}
          {formik.errors.email ? <p>{formik.errors.email}</p> : null}
        </span>

        <Input
          style={input}
          type="password"
          placeholder="enter your password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          name="password"
          label="password"
        />
        <span style={{ color: "white", marginLeft: "20px" }}>
          {formik.errors.password &&
            formik.touched.password &&
            formik.errors.password}
        </span>
        <Buttons
          style={button}
          className="btn btn-primary"
          value="sign-in"
          onClick={undefined}
        />
        <div className="d-flex mt-2" style={{ justifyContent: "center" }}>
          <p className="mt-2" style={{ color: "white" }}>
            needhelp?
          </p>
          <Buttons
            className="btn btn-danger ms-5"
            value="sign-up"
            onClick={undefined}
            style={undefined}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
