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
import "./User.css";
import Questioncomponent from "../component/Questioncomponent";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  fetchMoviesrecommendedforyou,
  fetchpopularshows,
} from "../reduxtoolkit/popularshows/popularslice";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const User = () => {
  const navigate = useNavigate();
  const dispatch: any = useDispatch();
  const [popups, setPopups] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);
  const [popup, setPopup] = useState<boolean>(false);
  const movie = useSelector((state: RootState) => state.movies.movies);
  const popular = useSelector(
    (state: RootState) => state.popularshows.popularshows
  );
  const fetchrecommendedforyou = useSelector(
    (state: RootState) => state.popularshows.Moviesrecommendedforyou
  );

  useEffect(() => {
    Wait();
    dispatch(fetchmovies());
    Wait();
    dispatch(fetchpopularshows());
    Wait2();
    dispatch(fetchMoviesrecommendedforyou());
  }, []);

  const Wait = () => {
    setTimeout(() => {
      setLoading(true);
    }, 5000);
  };

  const Wait2 = () => {
    setTimeout(() => {
      setLoader(true);
    }, 10000);
  };

  const handleNavigate = (id: number, main: {}) => {
    authuser() ? navigate(`/${id}`, { state: main }) : setPopup(true);
  };

  const handlegate = (id: any) => {
    setPopups(true);
  };

  // const handleloading = () => {
  //   if (movie.length < 10) {
  //     setLoading(false)
  //   }
  //   else(movie.length > 10){
  //     setLoading(true)
  //   }
  // }

  return (
    <>
      <Navbars className={""} onClick={undefined} />
      <Extra />
      <Questioncomponent />

      <div className="bg-black">
        <h1 className="mt-5 text-white text-center">Top Picks</h1>

        <div className="row">
          <Carousel responsive={responsive}>
            {movie &&
              movie.length > 0 &&
              movie.map((main: any) => {
                return (
                  <div className="mt-5">
                    <Card
                      className="hov"
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
          </Carousel>
        </div>
        <h1 className="text-white text-center">Popular shows</h1>
        <div className="row">
          <Carousel responsive={responsive}>
            {loading &&
              popular &&
              popular.length > 0 &&
              popular.map((mai: any) => {
                return (
                  <div className="mt-5">
                    <Card
                      className="hov"
                      style={{
                        width: "18rem",
                        backgroundColor: "black",
                      }}
                      onClick={() => handleNavigate(mai.id, mai)}
                    >
                      <Card.Body>
                        <Card.Title style={{ color: "white" }}>
                          {mai.moviename}
                        </Card.Title>
                        <Card.Img className="imgs" src={mai.img}></Card.Img>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
          </Carousel>
        </div>

        <h1 className="text-white text-center">Recommended Movies for you</h1>
        {!loading && (
          <div className="d-flex justify-content-center">
            {" "}
            <div className="loader d-flex justify-content-center align-items-center"></div>
          </div>
        )}
        {loading && !loader && (
          <div className="d-flex justify-content-center">
            <div className="loader"></div>
          </div>
        )}
        <div className="row">
          <Carousel responsive={responsive}>
            {loader &&
              fetchrecommendedforyou &&
              fetchrecommendedforyou.length > 0 &&
              fetchrecommendedforyou.map((mai: any) => {
                return (
                  <div className="mt-5">
                    <Card
                      className="hov"
                      style={{
                        width: "18rem",
                        backgroundColor: "black",
                      }}
                      onClick={() => handleNavigate(mai.id, mai)}
                    >
                      <Card.Body>
                        <Card.Title style={{ color: "white" }}>
                          {mai.moviename}
                        </Card.Title>
                        <Card.Img className="imgs" src={mai.img}></Card.Img>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
          </Carousel>
        </div>
        <div className="d-flex justify-content-center p-5">
          <Button id="1" className="btn btn-danger" onClick={handlegate}>
            Tamil
          </Button>
          <Button id="2" className="btn btn-primary ms-2" onClick={handlegate}>
            Telugu
          </Button>
          <Button id="3" className="btn btn-warning ms-2" onClick={handlegate}>
            Kannada
          </Button>
          <Button id="4" className="btn btn-primary ms-2" onClick={handlegate}>
            Hindi
          </Button>
          <Button id="5" className="btn btn-danger ms-2" onClick={handlegate}>
            Malayalam
          </Button>
        </div>
        <Button
          className="btn btn-danger w-50 d-flex justify-content-center mx-auto mt-5"
          onClick={() => navigate("/children")}
        >
          I am Below 18
        </Button>
      </div>
      {popups && (
        <Modal show={popups}>
          <Modal.Header>
            <Modal.Title>Hello User!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Welcome to Netflix!</Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                setPopups(false);
              }}
            >
              ok
            </Button>
          </Modal.Footer>
        </Modal>
      )}
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
