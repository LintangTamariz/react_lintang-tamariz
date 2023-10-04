import React from "react";

const Button = ({ id, label, type, onClick }) => {
  return (
    <div>
      <button
        id={id}
        onClick={onClick}
        type={type}
        className="bg-blue-600 hover:bg-blue-800 w-full mt-12 p-3 rounded-xl text-white"
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
