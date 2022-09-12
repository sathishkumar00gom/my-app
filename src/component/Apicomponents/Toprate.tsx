import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchmovies2 } from "../../reduxtoolkit/slice";
import { RootState } from "../../reduxtoolkit/store";

const Toprate = () => {
  const dispatch = useDispatch();
  const movies2 = useSelector((state: RootState) => state.movies.movies2);

  useEffect(() => {
    dispatch(fetchmovies2());
  }, []);
  return (
    <>
      <h1 className="text-white">Top Rated Orignals</h1>
      {movies2 &&
        movies2.map((get: any) => {
          return (
            <div className="col-lg-4 col-md-6 mt-5">
              <Card
                style={{
                  width: "18rem",
                  backgroundColor: "black",
                }}
              >
                <Card.Body>
                  <Card.Title style={{ color: "white" }}>
                    {get.moviename}
                  </Card.Title>
                  <Card.Img className="imgs" src={get.img}></Card.Img>
                  <div className="d-flex flex-column">
                    <Button
                      variant="primary mt-2"
                      //   onClick={() => handleView(main.id, main)}
                    >
                      View
                    </Button>
                    <Button
                      variant="danger mt-2"
                      //   onClick={() => handleDelete(main.id)}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="warning mt-2"
                      //   onClick={() => editdata(main.id, main)}onClick={handleAdd}
                    >
                      Edit
                    </Button>
                    <Button variant="light mt-2">Add</Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          );
        })}
    </>
  );
};

export default Toprate;
