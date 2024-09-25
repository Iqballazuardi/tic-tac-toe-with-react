/* eslint-disable react/prop-types */
// import { useState } from "react";

export default function Square({ value, onSquareClick }) {
  return (
    <button onClick={onSquareClick} className="square">
      {value}
    </button>
  );
}
