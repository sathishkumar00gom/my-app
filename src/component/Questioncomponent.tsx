import React, { useContext } from "react";
import Buttons from "../resued components/Buttons";
import Question from "./Question";
import { Context } from "../Home/Home";

const Questioncomponent = () => {
  const datas = useContext(Context);
  console.log(datas, "==dsdsd==>");
  return (
    <>
      <div
        className={`${datas ? "bg-black mt-5" : "bg-white mt-5"}`}
        style={{
          textAlign: "center",
        }}
      >
        <h1
          className={`${datas ? "text-white" : "text-black"}`}
          style={{
            fontSize: "bold",
            marginTop: "5px",
          }}
        >
          Frequently Asked Questions
        </h1>
        <Question maintext="what is Netflix?" id="1" />
        <Question maintext="How much does Netflix Cost?" id="2" />
        <Question maintext="Where can i Watch?" id="3" />
        <Question maintext="How do I Cancel" id="4" />
        <Question maintext="What can I watch on Netflix?" id="5" />
        <Question maintext="Is Netflix is Good for Kids" id="6" />

        <div>
          <p
            className={`${datas ? "text-white" : "text-black"}`}
            style={{
              textAlign: "center",
              fontSize: "25px",
              marginTop: "20px",
            }}
          >
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          {/* <Input style={{width:"50%",marginLeft:"40rem"}} placeholder="Enter your Email Address"/> */}
          <Buttons
            style={{}}
            className="btn btn-primary mx-auto d-flex justify-content-center"
            value="Get Started"
            onClick={undefined}
          />{" "}
        </div>
      </div>
    </>
  );
};

export default Questioncomponent;
