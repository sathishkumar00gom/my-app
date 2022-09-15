import React, { useEffect, useRef, useState } from "react";
import { TextField, Button, Modal, Box, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { style } from "../Carddetails/Carddetails";

const Otpcode = () => {
  const [nav, setnav] = useState<boolean>(false);
  const notify = () => toast("Wow so easy!");
  const navigate = useNavigate();
  const [otp, setOtp] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [dupotp, setDupotp] = useState<boolean>(false);
  const formik = useFormik({
    initialValues: {
      otpcode: "",
    },
    onSubmit: (values) => {
      handlenumber();
      // if (!otp) {
      //   handleout();
      // }
    },
  });

  const textref = useRef<HTMLInputElement>();

  const total = Number(textref.current?.value);

  const randomenumber = Math.random() * 100 + 1;
  const round = Math.floor(randomenumber);

  const evenround = round % 2 === 0;

  const values = () => {
    if (evenround) {
      return values;
    }
  };

  const navPage = () => {
    setTimeout(() => {
      return handleout();
    }, 5000);
  };

  const timeup = () => {
    setTimeout(() => {
      handleout();
    }, 7000);
  };

  const handlenumber = () => {
    console.log(round, "even");
    if (values()) {
      setValue("Invalid otp");
      setDupotp(true);
      timeup();
    } else {
      setOtp(true);
      setValue("");
      toast("OTP number is correct");
      timeup()
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
      {otp && <ToastContainer /> }
      {dupotp && (
        <Modal
          open={dupotp}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              className="text-danger fw-bold"
            >
              you are entering wrong otp
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              check your phone or email to get another otp code
            </Typography>
          </Box>
        </Modal>
      )}
      {}
    </>
  );
};

export default Otpcode;
