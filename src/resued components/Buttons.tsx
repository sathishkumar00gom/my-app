import React from "react";

interface Butons {
  className: string;
  value: string;
  onClick: any;
  style: any;
}

const Buttons: React.FC<Butons> = (props: any) => {
  return (
    <button
      style={props.style}
      type="submit"
      className={props.className}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
};

export default Buttons;
