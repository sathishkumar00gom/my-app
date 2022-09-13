import React from "react";
import Image from "../../assets/download-removebg-preview.png";
import "./Ratings.scss";

const Ratings = () => {
  const value = Math.random();
  const exvalue = Math.floor(value * 6);
  console.log(exvalue, "exvalue");

  return (
    <div className="mt-5">
      
      {exvalue === 5 ? (
        <>
          <i className="star"></i>
          <i className="star"></i>
          <i className="star"></i>
          <i className="star"></i>
          <i className="star"></i>
        </>
      ) : exvalue === 4 ? (
        <>
          <i className="star"></i>
          <i className="star"></i>
          <i className="star"></i>
          <i className="star"></i>
        </>
      ) : exvalue === 3 ? (
        <>
          <i className="star"></i>
          <i className="star"></i>
          <i className="star"></i>
        </>
      ) : exvalue === 2 ? (
        <>
          <i className="star"></i>
          <i className="star"></i>
        </>
      ) : exvalue === 1 ? (
        <>
          <i className="star"></i>
        </>
      ) : (
        exvalue === 0
      )}
    </div>
  );
};

export default Ratings;
