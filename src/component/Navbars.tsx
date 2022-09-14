import React, { useState, createContext, useContext } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  Modal,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Home from "../Home/Home";
import Buttons from "../resued components/Buttons";
import { BsList } from "react-icons/bs";
import "./Navbar.css";

import "./Navbat.css";
interface Classnames {
  className: string;
  onClick: void;
}

const Navbars: React.FC<Classnames> = (props: Classnames) => {
  const [buttonhidden, setButtonhidden] = useState<boolean>(false);
  const [popup, setPopup] = useState<boolean>(false);
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
    setPopup(true);
    Logouttime();
  };

  const Logouttime = () => {
    setTimeout(() => {
      navigate("/login");
    }, 10000);
  };

  const handleOpen = () => {
    setButtonhidden(!buttonhidden);
  };

  const handleClose = () => {
    setPopup(!popup);
  };

  const handleClose2 = () => {
    setPopup(!popup);
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
          {buttonhidden && (
            <>
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
            </>
          )}
          <i
            className="list text-white "
            style={{ fontSize: "40px" }}
            onClick={handleOpen}
          >
            <BsList />
          </i>
          {popup && (
            <Modal show={popup}>
              <Modal.Header>
                <Modal.Title>Leaving So Soon?</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Just so you know, you don’t always need to sign out of Netflix.
                It’s only necessary if you’re on a shared or public computer.
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleClose2}>
                  Go Now
                </Button>
              </Modal.Footer>
            </Modal>
          )}
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;
