import React from "react";

const OpenCard = props => {
  return (
    <p
      className={`ml-2 text-xl trans cursor-pointer select-none ${
        props.open ? "text-grey-darker" : "text-grey-dark"
      }`}
      onClick={props.onClick}
      style={
        props.open
          ? { transform: "rotate(180deg)" }
          : { transform: "rotate(0)" }
      }
    >
      &#9660;
    </p>
  );
};

export default OpenCard;
