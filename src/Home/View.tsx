import { url } from "inspector";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import Ratings from "../component/Ratings/Ratings";
import "./View.css";


const View = () => {
  const navigate = useNavigate();
  const location: any = useLocation();
  const state = location?.state;
  console.log(state, "state");

  return (
    <div
      className="divs d-flex justify-content-center"
      style={{
        backgroundImage: "url(`${state.back}`)",
        backgroundColor: "black",
        opacity: "0.9",
        padding: "50px 20px",
        height: "100vh",
      }}
    >
      <div>
        <Card
          style={{ width: "18rem" }}
          className={`${"bg-black opacity-100"}`}
        >
          <img className="img-fluid" src={state?.img} />
        </Card>
        <Button
          className="btn btn-info d-flex justify-content-center mt-2 mx-auto"
          onClick={() => {
            navigate("/payment", { state: state });
          }}
        >
          Watch Now
        </Button>
        
        <Ratings  />
      </div>
    </div>
  );
};

export default View;
