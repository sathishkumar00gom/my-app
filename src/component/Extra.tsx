import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Carosel from "./Carosel";
import "./Extra.css";
interface Para{
  img:string;
  content:string;
  para:string;
}
const Extra = () => {
  const navigate = useNavigate();
  const values = [
    {
      img: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
      content: "Enjoy on your TV.",
      para: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    },
    {
      img: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
      content: "Download your shows to watch offline.",
      para: "Save your favourites easily and always have something to watch.",
    },
    {
      img: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png",
      content: "Watch everywhere.",
      para: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    },
    {
      img: "https://occ-0-4875-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420",
      content: "Create profiles for children.",
      para: "Send children on adventures with their favourite characters in a space made just for them—free with your membership.",
    },
  ];

  return (
    <>
      <Carosel />
      <div className="d-flex justify-content-center align-items-center">
        <Button
          className="btn bg-black w-50 but"
          onClick={() => navigate("/shows")}
        >
          Explore our Shows
        </Button>
      </div>
      <div className="container">
        <div className="bg-black text-white row">
          {values &&
            values.map((main: Para) => {
              return (
                <>
                  <div className="col-lg-6">
                    <img className="img-fluid" src={main.img} />
                  </div>
                  <div className="col-lg-6 mt-5">
                    <h2>{main.content}</h2>
                    <p>{main.para}</p>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Extra;
