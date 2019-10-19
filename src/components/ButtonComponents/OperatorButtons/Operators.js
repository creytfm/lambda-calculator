import React, { useState } from "react";
import { operators }  from "../../../data"
import OperatorButton from "./OperatorButton"
//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorData] = useState(operators)
  return (
    <div>
      {operatorData.map((operator, i) => {
        return <OperatorButton key ={i} operator={operator.value} />
      })}
    </div>
  );
};
export default Operators