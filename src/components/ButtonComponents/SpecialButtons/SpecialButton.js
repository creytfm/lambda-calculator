import React from "react";

const SpecialButton = (props) => {
  return (
    <button>
      <span>{props.special}</span>
    </button>
  );
};

export default SpecialButton