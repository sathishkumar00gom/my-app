import React from "react";

interface Propsmain {
  text1: string;
  text2: string;
  img: string;
}

const Main: React.FC<Propsmain> = (props: Propsmain) => {
  return (
    <div>
      <div className="d-flex">
        <h1>{props.text1}</h1>
        <h3>{props.text2}</h3>
      </div>
      <div>
        <img src={props.img} />
      </div>
    </div>
  );
};

export default Main;
