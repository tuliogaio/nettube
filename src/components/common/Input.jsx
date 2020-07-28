import React from "react";
import './Input.css'

export default (props) => {
  return (
    <input
      type={props.type}
      className={props.className}
      placeholder={props.placeHolder}
    />
  );
};
