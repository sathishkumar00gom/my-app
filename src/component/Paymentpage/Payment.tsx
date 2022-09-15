import { Form } from "react-bootstrap";
import React, { useEffect, useRef, useState } from "react";
import { Card, Table, Button, Modal } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import "./Payment.css";
import { GrCheckboxSelected } from "react-icons/gr";

interface LocationState {
  id: number;
  img: string;
  moviename: string;
}

const Payment = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(true);
  const [ids, setIds] = useState<number>();
  const [popup, setPopup] = useState<boolean>(false);
  const [mynum, setMynum] = useState<number | string>(0);
  const [error, setError] = useState<string>("");
  const [select, setSelect] = useState<boolean>(false);
  const [select2, setSelect2] = useState<boolean>(false);
  const [select3, setSelect3] = useState<boolean>(false);
  const location = useLocation();
  const state = location.state as LocationState;

  const inputRef: any = useRef();

  const handleClick = (id: number) => {
    // setSelect(!select);
    setIds(id);
  };

  // useEffect(() => {
  //   Popup();
  // }, []);

  const handleSubmit = () => {
    if (inputRef.current.value.length !== 10) {
      setError("!pls enter a valid number");
    }
    if (inputRef.current.value.length === 10) {
      navigate("/otpcode");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setMynum(e.target.value);
    if (inputRef.current.value.length !== 10) {
      setError("!pls enter a valid number");
    }
    if (inputRef.current.value.length === 10) {
      setError("");
    }
  };

  const Popup = () => {
    setTimeout(() => {
      setOpen(true);
    }, 5000);
  };

  const datas = [
    {
      id: 1,
      watchtype: "Super",
      amount: "299/year",
    },
    {
      id: 2,
      watchtype: "Premium",
      amount: "899/year",
    },
    {
      id: 3,
      watchtype: "Gold",
      amount: "1499/year",
    },
  ];

  return (
    <div className="bg-black dir">
      <div className="row">
        <div className="col-lg-3"></div>
        <Card style={{}} className="mt-5 col-lg-6">
          <img className="img-fluid" src={state.img} alt="" />
        </Card>

        <div className="col-lg-3"></div>
      </div>
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <Card className="mt-5" style={{}}>
            <Table striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Super</th>
                  <th> Premium</th>
                  <th>Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>All Content</td>
                  <td>Watch on TV or Laptop</td>
                  <td>Ads free movies and shows (except sports)</td>
                  <td>Number of devices that can be logged in</td>
                </tr>
                <tr>
                  <td>yes</td>
                  <td>yes</td>
                  <td>No</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>yes</td>
                  <td>yes</td>
                  <td>Yes</td>
                  <td>4</td>
                </tr>
              </tbody>
            </Table>
            <div className="d-flex">
              {datas.map((dad) => {
                return (
                  <>
                    <Card
                      style={{ width: "33%" }}
                      className={`${
                        ids
                          ? "cad d-flex flex-row bg-black text-white"
                          : "cad d-flex flex-row bg-white"
                      }`}
                      onClick={() => handleClick(dad.id)}
                    >
                      <div>
                        <h2>{dad.watchtype}</h2>
                        <p style={{ fontSize: "30px" }}>{dad.amount}</p>
                      </div>
                      <i
                        className="ms-5 mt-5 text-white"
                        style={{ fontSize: "30px" }}
                      >
                        <GrCheckboxSelected />
                      </i>
                    </Card>
                  </>
                );
              })}
            </div>
            {/* <div className="d-flex">
              {" "}
              <Card
                style={{ width: "33%" }}
                className={`${
                  select && !select2 && !select3
                    ? "cad d-flex flex-row bg-black text-white"
                    : "cad d-flex flex-row bg-white"
                }`}
                onClick={handleClick}
              >
                <div>
                  <h2>Super</h2>
                  <p style={{ fontSize: "30px" }}>899/year</p>
                </div>
                <i
                  className="ms-5 mt-5 text-white"
                  style={{ fontSize: "30px" }}
                >
                  <GrCheckboxSelected />
                </i>
              </Card>
              <Card
                style={{ width: "33%" }}
                className={`${
                  select2 && !select3 && !select
                    ? "cad d-flex flex-row bg-black text-white"
                    : "cad d-flex flex-row bg-white"
                }`}
                onClick={handleClick2}
              >
                <div>
                  <h2 style={{}}>Premium</h2>
                  <p style={{ fontSize: "30px" }}>1499/year</p>
                </div>
                <i className="ms-5 mt-5" style={{ fontSize: "30px" }}>
                  <GrCheckboxSelected />
                </i>
              </Card>
              <Card
                style={{ width: "33%" }}
                className={`${
                  select3 && !select2 && !select
                    ? "cad d-flex flex-row bg-black text-white"
                    : "cad d-flex flex-row bg-white"
                }`}
                onClick={handleClick3}
              >
                <div>
                  <h2>Premium</h2>
                  <p style={{ fontSize: "30px" }}>299/year</p>
                </div>
                <i className="ms-5 mt-5 ics" style={{ fontSize: "30px" }}>
                  <GrCheckboxSelected />
                </i>
              </Card>
            </div> */}

            <Button onClick={() => setPopup(true)}>Continue with Super</Button>
            {open && (
              <Modal
                show={open}
                onHide={() => {
                  setOpen(false);
                }}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Subscribe Now</Modal.Title>
                </Modal.Header>
                <Modal.Body>Before Watching this you must subscribe</Modal.Body>
                <Modal.Footer>
                  <Button
                    type="submit"
                    variant="primary"
                    onClick={() => setOpen(false)}
                  >
                    Ok
                  </Button>
                </Modal.Footer>
              </Modal>
            )}
            {popup && (
              <Modal
                show={popup}
                onHide={() => {
                  setPopup(false);
                }}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Login to Continue</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Control
                      className={`${error ? "border border-danger" : ""}`}
                      ref={inputRef}
                      type="number"
                      placeholder="enter you mobile number"
                      onChange={handleChange}
                      value={mynum}
                    />
                    {error && <p className="text-danger">{error}</p>}
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      setPopup(false);
                    }}
                  >
                    Close
                  </Button>
                  <Button
                    type="submit"
                    variant="primary"
                    onClick={handleSubmit}
                  >
                    Continue
                  </Button>
                </Modal.Footer>
              </Modal>
            )}
          </Card>
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
};

export default Payment;
