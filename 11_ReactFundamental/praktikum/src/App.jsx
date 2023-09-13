// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SimpleHeader from "./layouts/Simple-header";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<SimpleHeader />} />
      </Routes>
    </BrowserRouter>
  );
}
