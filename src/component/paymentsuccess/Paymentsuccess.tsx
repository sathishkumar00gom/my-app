import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./paymentsuccess.css";

const Paymentsuccess = () => {

    const navigate=useNavigate()
  return (
    <div className="vh-100 bg-white d-flex flex-column justify-content-center align-items-center ">
      <div className="row">
        <div className="col-6 mat d-flex flex-column justify-content-center align-items-center">
          {" "}
          <h1 className="text-danger fw-bold">
            Your Payment is <br /> Succesfully Done!
          </h1>
          <p className="text-black fw-bold ">
            Now you can enjoy & play around the app
          </p>
          <Button
            onClick={() => {
              navigate("/");
            }}
          >
            Go to Home Page
          </Button>
          <p className="fw-bold">Enjoy the Netflix</p>
        </div>
        <div className="col-6">
          {" "}
          <img
            className="img-fluid"
            src="https://thumbs.dreamstime.com/b/bearded-happy-man-shows-thumb-up-gesture-cool-vector-illustration-cartoon-style-124097791.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Paymentsuccess;
