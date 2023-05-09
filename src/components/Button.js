import React from "react";
const Button = ({value, className, fn}) => {
  return (
    <button className={className} onClick={fn} >{value}</button>
  );
};

export default Button;