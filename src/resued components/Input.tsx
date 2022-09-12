import React from "react";
import { ErrorMessage, useField } from "formik";

interface Style {
  type: string;
  style: any;
  placeholder: string;
  onChange: any;
  onBlur: any;
  value: any;
  name: string;
  label: string;
}

const Input: React.FC<Style> = (props: any) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <div className="form-group">
        <label style={{ color: "white" }} htmlFor={field.name}>
          {props.label}
        </label>
        <input
          style={props.style}
          type={props.type}
          className={`form-control ${
            meta.touched && meta.error && "is-invalid"
          } `}
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
        <ErrorMessage component="div" name={field.name} className="error" />
      </div>
    </div>
  );
};

export default Input;
