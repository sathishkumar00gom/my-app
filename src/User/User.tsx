import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import Extra from "../component/Extra";
import Footer from "../component/Footer";
import Navbars from "../component/Navbars";
import { Values } from "../component/Apicomponents/Toppicks/Toppicks";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reduxtoolkit/store";
import { fetchmovies } from "../reduxtoolkit/slice";
import { useNavigate } from "react-router-dom";
import { authuser } from "../Utilise/Authuser";

const User = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [popup, setPopup] = useState<boolean>(false);
  const movie = useSelector((state: RootState) => state.movies.movies);
  console.log();
  useEffect(() => {
    dispatch(fetchmovies());
  }, []);

  const handleNavigate = (id: number, main: {}) => {
    authuser() ? navigate(`/${id}`, { state: main }) : setPopup(true);
  };

  return (
    <>
      <Navbars className={""} onClick={undefined} />
      <Extra />
      <div className="bg-black">
        <h1 className="mt-5 text-white text-center">Top Picks</h1>
        <div className="container">
          <div className="row">
            {movie &&
              movie.length > 0 &&
              movie.map((main: any) => {
                return (
                  <div className="col-lg-3 col-md-6 mt-5">
                    <Card
                      className="shadow-lg"
                      style={{
                        width: "18rem",
                        backgroundColor: "black",
                      }}
                      onClick={() => handleNavigate(main.id, main)}
                    >
                      <Card.Body>
                        <Card.Title style={{ color: "white" }}>
                          {main.moviename}
                        </Card.Title>
                        <Card.Img className="imgs" src={main.img}></Card.Img>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      {popup && (
        <Modal show={popup}>
          <Modal.Header>
            <Modal.Title>Hello User!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Before Watching our Series please log in</Modal.Body>
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
              variant="danger"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      <Footer />
    </>
  );
};

export default User;
