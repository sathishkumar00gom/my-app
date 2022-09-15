import { TextField, Typography, Modal } from "@mui/material";
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import "./Googlepay.css";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { style } from "./Carddetails/Carddetails";

const Googlepay = () => {
  const [bank, setBank] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [payment, setpayment] = useState<boolean>(false);
  const [notification, setNotification] = useState<boolean>(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      upinumber: "",
    },
    onSubmit: (values) => {
      Time();
      Customnumber();
    },
  });

  const Customnumber = () => {
    const number = Math.random();
    const correctnumber = Math.floor(number * 10);
    console.log(correctnumber, "randomenumber");
    if (
      correctnumber === 1 ||
      correctnumber === 10 ||
      correctnumber === 8 ||
      correctnumber === 6
    ) {
      navigate("/paymentsuccess");
    }
    if (correctnumber === 2 || correctnumber === 3 || correctnumber === 4) {
      setpayment(true);
      setTime();
    }
    if (correctnumber === 5 || correctnumber === 7 || correctnumber === 9) {
      setBank(true);
      setTime();
    }
  };

  const Time = () => {
    setTimeout(() => {
      setNotification(true);
    }, 5000);
  };

  const setTime = () => {
    return setTimeout(() => {
      setpayment(false);
      setBank(false);
    }, 10000);
  };

  return (
    <div className="bg-white vh-100 d-flex flex-column justify-content-center align-items-center">
      <img
        className="img-fluid maint"
        src="https://assets.stickpng.com/images/60e7f964711cf700048b6a6a.png"
        alt=""
      />
      <form onSubmit={formik.handleSubmit} className="d-flex flex-column">
        <TextField
          id="standard-basic"
          label="Enteryour UPI id"
          variant="standard"
          name="upinumber"
          onChange={formik.handleChange}
          value={formik.values.upinumber}
        />
        <Button type="submit" className="btn btn-primary mt-5">
          Submit
        </Button>
      </form>
      {bank && (
        <Modal
          open={bank}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              We are working with your bank!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Kindly Patient for some time!
            </Typography>
          </Box>
        </Modal>
      )}
      {payment && (
        <Modal
          open={payment}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              you dont have a enough money in your bank
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Kindly make sure enough money to subscribe
            </Typography>
          </Box>
        </Modal>
      )}
      {notification && (
        <Modal
          open={notification}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Wait!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              You payment is processing
            </Typography>
          </Box>
            
        </Modal>
      )}
      {success && (
        <Modal
          open={notification}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Hurrah!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              your payment is successfully done
            </Typography>
          </Box>
        </Modal>
      )}
    </div>
  );
};

export default Googlepay;
