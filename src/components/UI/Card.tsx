/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */

import "./Card.css";
type Props = {
  title: string;
  children?: JSX.Element[] | JSX.Element;
};

const Card = (props: Props) => {
  return (
    <div className="card">
      <h2 className="card-title">{props.title}</h2>
      <div className="card-body">{props.children}</div>
    </div>
  );
};

export default Card;
