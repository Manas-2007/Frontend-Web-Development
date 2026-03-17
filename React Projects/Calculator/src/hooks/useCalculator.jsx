import { useState, useEffect } from "react";

export const useCalculator = () => {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  const handleKeyDown = (e) => {
    const allowedKeys = "0123456789+-*/.=";
    if (allowedKeys.includes(e.key)) {
      if (e.key === "=" || e.key === "Enter") {
        handleButtonClick("=");
      } else {
        handleButtonClick(e.key);
      }
    } else if (e.key === "Backspace") {
      setInput((prev) => prev.slice(0, -1));
    } else if (e.key.toLowerCase() === "c") {
      handleButtonClick("C");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return { input, handleButtonClick };
};