/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import "./Header.css";

type Props = {};

const Header = (props: Props) => {
  return (
    <nav className="header">
      <a href="#">Program Details</a>
      <a href="#">Application Form</a>
      <a href="#">Workflow</a>
      <a href="#">Preview</a>
    </nav>
  );
};

export default Header;
