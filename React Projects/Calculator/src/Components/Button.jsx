import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center text-2xl font-medium rounded-lg m-1 transition transform hover:scale-105 active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;