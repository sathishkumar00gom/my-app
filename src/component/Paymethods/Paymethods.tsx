import React, { useEffect } from "react";
import { fetchcards } from "../../reduxtoolkit/slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reduxtoolkit/store";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Paymethods = () => {
  const navigate = useNavigate();
  const dispatch: any = useDispatch();

  const cards = useSelector((state: RootState) => state.movies.cards);
  console.log(cards, "cards");

  useEffect(() => {
    dispatch(fetchcards());
  }, []);

  return (
    <>
      <div className="bg-white vh-100">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <h1 className="fw-bold text-center mt-5">Premium Plan</h1>
            {cards &&
              cards.map((card: any) => {
                return (
                  <Card
                    style={{ height: "8rem" }}
                    className="shadow-lg mt-2"
                    onClick={() => {
                      navigate(`/carddetails/${card.id}`);
                    }}
                  >
                    <div className="row mt-2">
                      <div className="col-lg-6 mt-3 fw-bold d-flex justify-content-center">
                        {" "}
                        {card.cardname}
                      </div>
                      <div className="col-lg-6 d-flex justify-content-center">
                        <img style={{ width: "150px" }} src={card.Cardlogo1} />
                      </div>
                    </div>
                  </Card>
                );
              })}
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </>
  );
};

export default Paymethods;
