import React, { useEffect, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { fetchanswer } from "../reduxtoolkit/slice";
import { RootState } from "../reduxtoolkit/store";
interface Myprops {
  maintext: string;
  id: string;
}

const Question: React.FC<Myprops> = (props: Myprops) => {
  const dispatch: any = useDispatch();
  const [answer, setAnswer] = useState<boolean>(false);

  useEffect(() => {
    dispatch(fetchanswer());
  }, []);

  const answers = useSelector((state: RootState) => state.movies.answers);
  console.log(answers, "answ");

  const handleOpen = (id: any) => {
    setAnswer(!answer);
    console.log(id, "ids");
  };

  return (
    <div
      style={{
        width: "50%",
        backgroundColor: "white",
        display: "flex flex-column justify-content-space-between",
        justifyContent: "center",
        marginLeft: "25%",
        boxShadow: "10px 20px 50px black",
      }}
    >
      {/* {answers &&
        answers.map((ans: any) => {
          return (
            <>
              <h1>{ans.Qus}</h1>
              <i
                style={{ fontSize: "30px" }}
                onClick={() => handleOpen(ans.id)}
              >
                <AiFillPlusCircle />
              </i>
              {answer && (
                <div className="bg-black text-white">
                  <h3>{ans.answer}</h3>
                </div>
              )}
            </>
          );
        })} */}
    </div>
  );
};

export default Question;
