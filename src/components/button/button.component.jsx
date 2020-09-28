import React from "react";

import "./button.styles.scss";

const CustomButton = ({ disabled, children, ...otherProps }) => (
  <button
    className={`${disabled ? "disabled" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
