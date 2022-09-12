import React from "react";

interface Myprops {
  maintext: string;
}

const Question: React.FC<Myprops> = (props: Myprops) => {
  return (
    <div
      style={{
        width: "50%",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        marginLeft: "25%",
        boxShadow: "10px 20px 50px black",
      }}
    >
      <h1>{props.maintext}</h1>
    </div>
  );
};

export default Question;
