import React, { useEffect } from "react";
import { fetchcards } from "../../reduxtoolkit/slice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../reduxtoolkit/store";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface Cards{
  id:number,
  cardname:string,
Cardlogo1:string
}

const Paymethods = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const cards = useSelector((state: RootState) => state.movies.cards);
  console.log(cards, "cards");

  useEffect(() => {
    dispatch(fetchcards());
  }, []);

  const handlesub = (id: number) => {
    if (id === 1 || id === 2 || id === 3) {
      navigate(`/carddetails/${id}`);
    }
    if (id === 4) {
      navigate(`/googlepay/${id}`);
    }
    if (id === 5) {
      navigate(`/phonepay/${id}`);
    }
  };

  return (
    <>
      <div className="bg-white">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <h1 className="fw-bold text-center mt-5">Premium Plan</h1>
            {cards &&
              cards.map((card: Cards) => {
                return (
                  <Card key={card.id}
                    style={{ height: "9rem" }}
                    className="shadow-lg mt-2"
                    onClick={() => handlesub(card.id)}
                  >
                    <div className="row">
                      <div className="col-lg-6 mt-3 fw-bold d-flex justify-content-center">
                        {" "}
                        <p className="">{card.cardname}</p>
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
