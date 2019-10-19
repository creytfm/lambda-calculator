import React, { useState } from "react";
import { numbers } from "../../../data"
import NumberButton from "./NumberButton"
//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberData] = useState(numbers)
  return (
    <div>
      {numberData.map((number, i) => {
        return <NumberButton key ={i} number={number.value} />
      })}
    </div>
  );
};

export default Numbers