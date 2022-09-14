import React, { useEffect, useRef, useState } from "react";
import { TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Otpcode = () => {
  const notify = () => toast("Wow so easy!");
  const navigate = useNavigate();
  const [otp, setOtp] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const formik = useFormik({
    initialValues: {
      otpcode: "",
    },
    onSubmit: (values: any) => {
      handlenumber();
      if (!otp) {
        handleout();
      }
    },
  });

  const textref: any = useRef();

  const total = Number(textref.current?.value);

  let randomenumber = Math.random() * 10;
  let round = Math.floor(randomenumber);
  console.log(round, "round");
  const values = () => {
    if (
      round === 0 ||
      round === 1 ||
      round === 2 ||
      round === 3 ||
      round === 4 ||
      round === 5
    ) {
      return values;
    }
  };

  //   useEffect(()=>{
  //     navigate("/paymethods")
  //   },[])

  let sumtotal = total === 12345;

  const handlenumber = () => {
    console.log(round, "rods");
    if (sumtotal && values()) {
      setValue("Invalid otp");
    } else {
      setOtp(true);
      setValue("");
      toast("OTP number is correct");
    }
  };
  const handleout = () => {
    navigate("/paymethods");
  };

  

  return (
    <>
      <div className="vw-100 bg-white vh-100 d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-center fw-bold">
          We have send you a code
          <br /> Kindly Enter
        </h1>
        <form onSubmit={formik.handleSubmit} className="d-flex flex-column">
          <TextField
            inputRef={textref}
            id="standard-basic"
            label="Enter OTP"
            variant="standard"
            name="otpcode"
            onChange={formik.handleChange}
            value={formik.values.otpcode}
          />

          {value && <span className="text-danger">{value}</span>}
          <Button type="submit" className="btn btn-primary mt-5">
            Submit
          </Button>
        </form>
      </div>
      {otp ? <ToastContainer />:""}
      {}
    </>
  );
};

export default Otpcode;
