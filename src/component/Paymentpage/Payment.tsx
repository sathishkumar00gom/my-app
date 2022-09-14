import { Form } from "react-bootstrap";
import React, { useRef, useState } from "react";
import { Card, Table, Button, Modal } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import "./Payment.css";

const Payment = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState<any>("");
  const [popup, setPopup] = useState<boolean>(false);
  const [mynum, setMynum] = useState<any>({});
  const [error, setError] = useState<string>("");
  const location: any = useLocation();
  const state = location.state;

  const inputRef: any = useRef();

  const handleClick = () => {
    setPopup(true);
  };

  const handleSubmit = () => {
    if (inputRef.current.value.length !== 10) {
      setError("!pls enter a valid number");
    }
    if (inputRef.current.value.length === 10) {
      navigate("/otpcode")
     
    }
  };

  const handleChange = (e: any) => {
    setMynum(e.target.value);
    if (inputRef.current.value.length !== 10) {
      setError("!pls enter a valid number");
    }
    if (inputRef.current.value.length === 10) {
      setError("");
    }
  };

  return (
    <div className="bg-black dir">
      <div className="row">
        <div className="col-lg-3"></div>
        <Card style={{}} className="mt-5 col-lg-6">
          <img className="img-fluid ids" src={state.img} alt="" />
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
              {" "}
              <Card
                style={{ width: "33%" }}
                className="cad"
                onClick={handleClick}
              >
                <h2>Super</h2>
                <p>899/year</p>
              </Card>
              <Card
                style={{ width: "33%" }}
                className="cad"
                onClick={handleClick}
              >
                <h2>Premium</h2>
                <p>1499/year</p>
              </Card>
              <Card
                style={{ width: "33%" }}
                className="cad"
                onClick={handleClick}
              >
                <h2>Premium</h2>
                <p>299/year</p>
              </Card>
            </div>
            <Button>Continue with Super</Button>
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
