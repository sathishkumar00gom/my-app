import { Main } from "next/document";
import React, {
  useCallback,
  useEffect,
  useState,
  createContext,
  useContext,
  Suspense,
  lazy,
} from "react";
import Footer from "../component/Footer";
import Navbars from "../component/Navbars";
import Question from "../component/Question";
import Buttons from "../resued components/Buttons";
import Input from "../resued components/Input";
import { Card, Button, Row } from "react-bootstrap";
import { questionarray } from "../values/values";
import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reduxtoolkit/store";
import { deletemovies, fetchmovies, addmovies } from "../reduxtoolkit/slice";
import ModalPopup from "../resued components/ModalPopup";
import { Modal, Form } from "react-bootstrap";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { postloginusers } from "../reduxtoolkit/slice";

import Questioncomponent from "../component/Questioncomponent";
import Toppicks from "../component/Apicomponents/Toppicks/Toppicks";
import Toprate from "../component/Apicomponents/Toprate";
import Carosel from "../component/Carosel";
import Data from "../component/Apicomponents/Data";

export const Context = createContext(null);

const Home: React.FC = () => {
  const [color, setcolor] = useState<boolean | any>(false);

  const handlecolor = () => {
    setcolor(true);
  };
  const handlecolor2 = () => {
    setcolor(false);
  };
  return (
    <div>
      <Context.Provider value={color}>
        <Navbars className={""} onClick={undefined} />
        <div style={{ textAlign: "center" }}>
          <Button className="btn btn-light" onClick={handlecolor}>
            Dark
          </Button>
          <Button className="btn btn-light" onClick={handlecolor2}>
            light
          </Button>
          <h1 style={{ color: "white", fontWeight: "bold", fontSize: "70px" }}>
            Unlimited movies, TV <br />
            shows and more.
          </h1>
          <h2 style={{ color: "white" }}>Watch anywhere. Cancel anytime.</h2>
          <span
            style={{ color: "white", fontWeight: "bold", fontSize: "20px" }}
          >
            Ready to watch? Enter your email to create or restart your
            membership.
          </span>
        </div>
        <div className="d-flex mt-2">
          {/* <Input style={{width:"50%",marginLeft:"40rem"}} placeholder="Enter your Email Address"/> */}
          <Buttons
            style={{}}
            className="btn btn-primary mx-auto d-flex justify-content-center"
            value="Get Started"
            onClick={undefined}
          />
        </div>
        {/* <Main text1="Enjoy on your TV." text2="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more." img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"/> */}

        <Data />
        <Footer />
      </Context.Provider>
    </div>
  );
};

export default Home;
