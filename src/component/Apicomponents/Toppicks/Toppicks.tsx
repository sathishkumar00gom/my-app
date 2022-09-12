import React, { useEffect, useState, useCallback, createContext } from "react";
import { Card, Button, Modal, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  addmovies,
  deletemovies,
  fetchmovies,
} from "../../../reduxtoolkit/slice";
import { RootState } from "../../../reduxtoolkit/store";
import { Admin } from "../../../Utilise/Adminuser";
import { authuser } from "../../../Utilise/Authuser";

interface Formstate {
  moviename: string;
  img: string;
}

export const Values: any = createContext(null);
const Toppicks = () => {
  const [color, setcolor] = useState<boolean | any>(false);
  const [modal, setModal] = useState<boolean>(false);
  const [formSummit, setForm] = useState<Formstate>({
    moviename: "",
    img: "",
  });

  const [value, setValue] = useState<boolean>(false);
  const dispatch = useDispatch();
  const movie = useSelector((state: RootState) => state.movies.movies);
  const navigate = useNavigate();
  const [unauthuser, setUnAuthuser] = useState<boolean>(false);
  console.log(movie, "movie");

  useEffect(() => {
    dispatch(fetchmovies());
  }, []);

  const adminCheck = () => {
    const getuser = localStorage.getItem("user");
    const getuserdetail = JSON.parse(getuser || "{}");
    const main =
      getuserdetail[0]?.email === "sathishkumar@gmail.com" &&
      getuserdetail[0]?.password === "12345678";
    if (main) {
      return main;
    } else {
      setModal(true);
    }
  };

  const handleDelete = (id: string) => {
    adminCheck() ? dispatch(deletemovies(id)) : setUnAuthuser(true);
  };

  const handleAdd = () => {
    adminCheck() ? setValue(true) : setUnAuthuser(true);
  };

  const handleChange = (e: any) => {
    setForm({ ...formSummit, [e.target.name]: e.target.value });
  };

  const handledata = () => {
    dispatch(addmovies(formSummit));
  };

  const formHandleSubmit = () => {};

  const editdata = (id: any, main: {}) => {
    adminCheck()
      ? navigate(`./edit/${id}`, { state: main })
      : setUnAuthuser(true);
  };

  const handleView = useCallback((id: any, main: {}) => {
    console.log(authuser(), "authuser");
    adminCheck() ? navigate(`/${id}`, { state: main }) : setUnAuthuser(true);
  }, []);

  const handleClose = () => {
    setUnAuthuser(false);
  };

  const handleLogin = () => {
    navigate("./login");
  };

  const handlecolor = () => {
    setcolor(true);
  };
  const handlecolor2 = () => {
    setcolor(false);
  };

  return (
    <>
      <Values.Provider value={movie}>
        <h1 className="mt-5 text-white">Top Picks</h1>
        {movie &&
          movie.length > 0 &&
          movie.map((main: any) => {
            return (
              <div className="col-lg-4 col-md-6 mt-5">
                <Card
                  className="shadow-lg"
                  style={{
                    width: "18rem",
                    backgroundColor: "black",
                  }}
                >
                  <Card.Body>
                    <Card.Title style={{ color: "white" }}>
                      {main.moviename}
                    </Card.Title>
                    <Card.Img className="imgs" src={main.img}></Card.Img>
                    <div className="d-flex flex-column">
                      <Button
                        variant="primary mt-2"
                        onClick={() => handleView(main.id, main)}
                      >
                        View
                      </Button>
                      <Button
                        variant="danger mt-2"
                        onClick={() => handleDelete(main.id)}
                      >
                        Delete
                      </Button>
                      <Button
                        variant="warning mt-2"
                        onClick={() => editdata(main.id, main)}
                      >
                        Edit
                      </Button>
                      <Button variant="light mt-2" onClick={handleAdd}>
                        Add
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
                {value && (
                  <Modal show={value}>
                    <Modal.Header>
                      <Modal.Title>Add Movies</Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={handledata}>
                      <Modal.Body>
                        <Form.Label>moviename</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="enter moviename"
                          name="moviename"
                          onChange={handleChange}
                          value={formSummit.moviename}
                        />
                        <Form.Label>movie url</Form.Label>
                        <Form.Control
                          type="url"
                          placeholder="enter movieurl"
                          name="img"
                          onChange={handleChange}
                          value={formSummit.img}
                        />
                      </Modal.Body>
                      <Modal.Footer>
                        <Button type="submit" className="btn btn-primary">
                          Add
                        </Button>
                      </Modal.Footer>
                    </Form>
                  </Modal>
                )}
              </div>
            );
          })}
        {unauthuser && (
          <Modal show={unauthuser}>
            <Modal.Header closeButton>
              <Modal.Title>UnAuthorised User</Modal.Title>
            </Modal.Header>
            <Modal.Body>Before Do that you must login</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleLogin}>
                Login
              </Button>
            </Modal.Footer>
          </Modal>
        )}
        {modal && (
          <Modal show={modal}>
            <Modal.Header>
              <Modal.Title>Warning!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              you are not a right person to edit these data
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => {
                  setModal(false);
                }}
              >
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  navigate("/login");
                }}
              >
                login
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </Values.Provider>
    </>
  );
};

export default Toppicks;
