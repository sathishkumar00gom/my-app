import React, { useState, createContext, useContext } from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Home from "../Home/Home";
import Buttons from "../resued components/Buttons";

import "./Navbat.css";
interface Classnames {
  className: string;
  onClick: void;
}

const Navbars: React.FC<Classnames> = (props: Classnames) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/login");
  };

  const handleSubmits = () => {
    navigate("/signup");
  };

  const handleOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/login");
  };

  return (
    <>
      <Navbar className="bg-black" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              style={{ width: "80px", height: "" }}
              src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png"
              alt=""
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
          <Buttons
            className="btn btn-light"
            value="Sign up"
            onClick={handleSubmits}
            style={undefined}
          />
          <Buttons
            className="btn btn-danger ms-5"
            value="Sign in"
            onClick={handleSubmit}
            style={undefined}
          />
          <Buttons
            className="btn btn-primary ms-5"
            value="Sign out"
            onClick={handleOut}
            style={undefined}
          />
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;
