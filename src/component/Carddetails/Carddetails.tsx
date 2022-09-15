import {
  Checkbox,
  TextField,
  Button,
  Modal,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Carddetails = () => {
  const [bank, setBank] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [payment, setpayment] = useState<boolean>(false);
  const [notification, setNotification] = useState<boolean>(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      cardholdername: "",
      cardnumber: "",
    },
    validationSchema: Yup.object({
      cardholdername: Yup.string()
        .min(5, "Must be 15 characters or less")
        .required("Cardholder name must not be empty!"),
      cardnumber: Yup.string()
        .min(5, "Must be 20 characters or less")
        .required("Card Number must not be empty!"),
    }),
    onSubmit: (values) => {
      setNotification(true);
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
      correctnumber === 6 ||
      correctnumber === 3
    ) {
      navigate("/paymentsuccess");
    }
    if (correctnumber === 2 || correctnumber === 4) {
      setpayment(true);
      setTime();
    }
    if (correctnumber === 5 || correctnumber === 7 || correctnumber === 9) {
      setBank(true);
      setTime();
    }
  };

  const Time = () => {
    return setTimeout(() => {
      setNotification(false);
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
      <h1 className="text-center">Premium Plan</h1>
      <div className="">
        <form onSubmit={formik.handleSubmit} className="d-flex flex-column">
          <TextField
            id="standard-basic"
            label="Card Holder Name"
            variant="standard"
            name="cardholdername"
            onChange={formik.handleChange}
            value={formik.values.cardholdername}
          />
          {formik.touched.cardholdername && formik.errors.cardholdername && (
            <div className="text-danger">{formik.errors.cardholdername}</div>
          )}
          <TextField
            id="standard-basic"
            label="Card Number"
            variant="standard"
            name="cardnumber"
            onChange={formik.handleChange}
            value={formik.values.cardnumber}
          />
          {formik.touched.cardnumber && formik.errors.cardnumber && (
            <div className="text-danger">{formik.errors.cardnumber}</div>
          )}

          <TextField id="standard-basic" label="MM/YY" variant="standard" />
          <TextField id="standard-basic" label="CVV" variant="standard" />
          <div className="d-flex">
            <Checkbox size="small" />
            <p className="mt-3">
              I am over 18, and I agree to the above conditions and the Terms of
              Use and Privacy Policy.
            </p>
          </div>
          <Button variant="contained" type="submit" className="d-flex mx-auto">
            Start Membership
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
            <Box sx={style} className="loaders">
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Wait!
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                You payment is processing
              </Typography>
              <CircularProgress />
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
    </div>
  );
};

export default Carddetails;
