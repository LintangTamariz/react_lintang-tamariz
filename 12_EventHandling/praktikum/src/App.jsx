
import './App.css'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SimpleHeader from "./layouts/SimpleHeader"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<SimpleHeader />} />
      </Routes>
    </BrowserRouter>
  );
}