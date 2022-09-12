import { Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import "./Edit.css";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editmovies } from "../reduxtoolkit/slice";

interface editvalue {
  id: number;
  moviename: string;
  img: string;
}
const Edit = () => {
  const navigate = useNavigate();
  const location: any = useLocation();
  const value = location.state;
  const dispatch: any = useDispatch();
  console.log(value, "values");

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

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (data: {}) => {
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
