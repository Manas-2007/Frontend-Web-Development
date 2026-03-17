import React from "react";
import Button from "/Button";
import Display from "./Display.jsx";
import { useCalculator } from "../hooks/useCalculator";

const Calculator = () => {
  const { input, handleButtonClick } = useCalculator();

  const buttons = [
    ["7","8","9","/"],
    ["4","5","6","*"],
    ["1","2","3","-"],
    ["0",".","=","+"],
    ["C"]
  ];

  return (
    <div className="w-80 bg-gray-700 dark:bg-gray-100 rounded-lg shadow-lg p-4">
      <Display value={input} />
      <div className="grid grid-cols-4 gap-2 mt-4">
        {buttons.flat().map((btn, i) => (
          <Button
            key={i}
            onClick={() => handleButtonClick(btn)}
            className={btn === "=" ? "bg-blue-500 text-white" : btn === "C" ? "bg-red-500 text-white col-span-4" : "bg-gray-600 dark:bg-gray-300"}
          >
            {btn}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;