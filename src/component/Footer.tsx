import React, { createContext, useContext } from "react";
import { Context } from "../Home/Home";

const Footer = () => {
  const datas = useContext(Context);
  return (
    <div
      className={`${datas ? "bg-black" : "bg-white"}`}
      style={{
        width: "100vw",

        marginTop: "100px",
        color: "white",
      }}
    >
      <h1
        className={`${datas ? "text-white" : "text-black"}`}
        style={{ marginTop: "50px", textAlign: "center" }}
      >
        Questions? Call 000-800-040-1843
      </h1>
      <div className="container">
        <div
          className={`${
            datas ? "text-white d-flex row" : "text-black d-flex row"
          }`}
          style={{ justifyContent: "space-around" }}
        >
          <div className="col-lg-3 col-md-3">
            <p>FAQ</p>
            <p>Investor Relations</p>
            <p>Privacy</p>
            <p>Speed Test</p>
          </div>
          <div className="col-lg-3 col-md-3">
            <p>Help Centre</p>
            <p>Jobs</p>
            <p>Cookie Preferences</p>
            <p> Legal Notices</p>
          </div>
          <div className="col-lg-3 col-md-3">
            <p>Account</p>
            <p> Ways to watch</p>
            <p>Corporate Information</p>
            <p>Only on Netflix </p>
          </div>
          <div className="col-lg-3 col-md-3">
            <p>Media Centre</p>
            <p> Terms of Use </p>
            <p> Contact us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
