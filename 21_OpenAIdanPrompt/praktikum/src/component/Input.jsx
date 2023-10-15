import React from "react";

const Input = ({ prompt, setPrompt }) => {
  return (
    <input
      type="text"
      id={"openai"}
      placeholder={"type your input here..."}
      value={prompt}
      onChange={(e) => setPrompt(e.target.value)}
      className="mt-4 w-full p-2 border border-gray-300 rounded-lg mb-4"
    />
  );
};

export default Input;
