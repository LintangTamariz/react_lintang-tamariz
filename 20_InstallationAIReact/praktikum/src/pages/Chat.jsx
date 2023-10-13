import React, { useState } from "react";
import { OpenAIApi, Configuration } from "openai";
import Input from "../component/Input"
import Button from "../component/Button";

const Chat = () => {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_KEY
  });

  const openai = new OpenAIApi(configuration);

  const [result, setResult] = useState("");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResult = async () => {
    setLoading(true);
    await openai
    .createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0.5,
        max_tokens: 100,
      })
      .then((response) => {
        setResult(response?.data?.choices[0].text);
      })
      .catch((error) => {
        console.log(error);
      });
      setLoading(false);
  };

  console.log("result:", result);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md p-6  rounded-lg shadow-md">
        <label className="font-semibold text-white">What Are You Looking for?</label>
        <Input prompt={prompt} setPrompt={setPrompt} />
        <textarea
          value={result}
          onChange={(e) => setResult(e.target.value)}
          className="w-full h-32 p-2 border border-gray-300 rounded-lg mb-4"
        ></textarea>
        <Button handleResult={handleResult} />
      </div>
    </div>
  );
};

export default Chat;
