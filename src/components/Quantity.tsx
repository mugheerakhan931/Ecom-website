"use client";

import React, { useState } from "react";

const Quantity = () => {
  const [num, setNum] = useState(1);
  return (
    <div className="grid grid-flow-col auto-cols-max gap-x-2">
      {/* Quantity */}
      {/* Minus */}
      <button
        className="border h-6 w-6 rounded-full center"
        onClick={() => {
          setNum(num > 1 ? num - 1 : 1);
        }}
      >
        -
      </button>
      {/* Number */}
      <span className="text-sm">{num}</span>
      {/* Plus */}
      <button
        className="border h-6 w-6 rounded-full center"
        onClick={() => {
          setNum(num + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;

{
  /* <OperationBtn />
export const OperationBtn = () => {
  return <div className="border h-6 w-6 rounded-full center">+</div>;
}; */
}
