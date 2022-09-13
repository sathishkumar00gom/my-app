import React, { Suspense, lazy, useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { Context } from "../../Home/Home";
import Carosel from "../Carosel";
import Questioncomponent from "../Questioncomponent";

const Apiloader1 = lazy(() => import("../Apicomponents/Toppicks/Toppicks"));
const Apiloader2 = lazy(() => import("../Apicomponents/Toprate"));  

const Data = () => {
  const [toppicks, setToppicks] = useState<boolean>(false);
  const [toprate, setToprate] = useState<boolean>(false);
  const datas = useContext(Context);

  const handleClick = () => {
    setToppicks(true);
    setToprate(false);
  };

  const handleClick2 = () => {
    setToprate(true);
    setToppicks(false);
  };
  return (
    <div
      className={`${datas ? "bg-white mt-5" : "bg-black mt-5"}`}
      style={{
        textAlign: "center",
      }}
    >
      <Questioncomponent />

      <div className="container mt-5">
        <div className="row mt-5">
          <div className="d-flex row">
            <div className="col-4">
              <Button className="btn btn-primary" onClick={handleClick}>
                Top Picks
              </Button>
              <Button className="btn btn-danger" onClick={handleClick2}>
                Top Rated Originals
              </Button>
              <Button className="btn btn-light" onClick={handleClick}>
                Top 10 Trending Movies
              </Button>

              <Button className="btn btn-warning" onClick={handleClick}>
                Top Shows Before TV
              </Button>
            </div>
            <div className="col-4">
              <Button className="btn btn-dark" onClick={handleClick}>
                Popular In Sports
              </Button>
              <Button className="btn btn-info" onClick={handleClick}>
                Crime, Mystery & Investigation
              </Button>
              <Button className="btn btn-success" onClick={handleClick}>
                Top Reality Shows
              </Button>
              <Button className="btn btn-primary" onClick={handleClick}>
                Emmy Nominations 2022: Binge Now
              </Button>
            </div>
            <div className="col-4">
              <Button className="btn btn-danger" onClick={handleClick}>
                FREE: 100+ Movies 🍿🥤
              </Button>
              <Button className="btn btn-light" onClick={handleClick}>
                Blockbuster Movies
              </Button>
              <Button className="btn btn-warning" onClick={handleClick}>
                VOOT Rewind{" "}
              </Button>
            </div>
          </div>

          <h2 className={`${datas? "text-black ms-5":"text-white ms-5"}`}>
            You can Choose your favourites by clicking the above button
          </h2>
          <Carosel />

          <Suspense fallback={<div className="text-white">Loading Datas</div>}>
            {toppicks && <Apiloader1 />}
            {toprate && <Apiloader2 />}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Data;
