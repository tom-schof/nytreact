import React from "react";
import "./saveBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const SaveBtn = props => (
  <span className="save-btn" {...props}>
    X
  </span>
);

export default SaveBtn;
