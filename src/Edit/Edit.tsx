import { Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import "./Edit.css";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editmovies } from "../reduxtoolkit/slice";
import { AppDispatch } from "../reduxtoolkit/store";

interface editvalue {
  id: number;
  moviename: string;
  img: string;
}

interface LocationState {
    id: number;
    img: string;
    moviename: string;
}
const Edit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const value = location.state as LocationState;
  const dispatch: AppDispatch = useDispatch();
  console.log(location, "values");

  const { moviename, img, id } = value;
  const [newData] = useState<editvalue>({
    id: id,
    moviename: moviename,
    img: img,
  });
  const [data, setData] = useState<editvalue>({
    id: newData.id,
    moviename: newData.moviename,
    img: newData.img,
  });

  console.log(data, "dededed");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (data: editvalue) => {
    console.log(id, "idsdsdsds");
    dispatch(editmovies(data));
    navigate("/");
  };

  return (
    <div className="container wel">
      <div className="editdiv">
        <h1>Edit Data</h1>
        <div className="row">
          <div className="col-lg-6">
            <img className="img-fluid" src={data.img} />
          </div>
          <div className="col-lg-6">
            <Form onSubmit={() => handleSubmit(data)}>
              <Form.Label>moviename</Form.Label>
              <Form.Control
                type="text"
                placeholder="moviename"
                onChange={handleChange}
                value={data.moviename}
                name="moviename"
              ></Form.Control>
              <Form.Label>movieurl</Form.Label>
              <Form.Control
                type="url"
                placeholder="movieurl"
                onChange={handleChange}
                value={data.img}
                name="img"
              ></Form.Control>
              <Button className="btn btn-warning mt-5" type="submit">
                EditData
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
