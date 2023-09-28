/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import React from "react";

import "./Card.css";
type Props = {
  title: string;
  children?: JSX.Element[] | JSX.Element;
};

const Card = (props: Props) => {
  return (
    <div className="card shadow-md max-w-md w-full">
      <h2 className="card-title p-6 mb-4">{props.title}</h2>
      <div className="card-body p-6">{props.children}</div>
    </div>
  );
};

export default Card;
