import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchTop10TrendingMovies } from "../../reduxtoolkit/popularshows/popularslice";
import { AppDispatch, RootState } from "../../reduxtoolkit/store";

interface Top {
  id: number;
  img: string;
}
const Shows = () => {
  const dispatch: AppDispatch = useDispatch();
  const topten = useSelector(
    (state: RootState) => state.popularshows.Top10TrendingMovies
  );
  useEffect(() => {
    dispatch(fetchTop10TrendingMovies());
  }, []);
  return (
    <>
      <div className="bg-black vw-100">
        <h1 className="text-center text-white ">
          {" "}
          Enjoy our shows with netflix
        </h1>
        <div className="row d-flex justify-content-center align-items-center">
          {topten &&
            topten.map((top: Top) => {
              return (
                <Card
                  style={{ width: "20rem" }}
                  className="col-lg-4 mt-5 ms-5 bg-black hov"
                  key={top.id}
                >
                  <Card.Body>
                    <img className="img-fluid" src={top.img} />
                  </Card.Body>
                </Card>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Shows;
