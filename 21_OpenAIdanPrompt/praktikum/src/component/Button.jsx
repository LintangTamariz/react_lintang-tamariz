import React from "react";

const Button = ({ handleResult }) => {
  return (
    <button
      id={"submit"}
      label={"Click"}
      onClick={handleResult}
      className="w-full bg-blue-500 hover-bg-blue-700 text-white py-2 px-4 rounded"
    >
      Input
    </button>
  );
};

export default Button;
