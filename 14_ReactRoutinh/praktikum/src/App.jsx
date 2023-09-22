import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './layouts/Home'
import Create from './layouts/Create'
// import Jumbotron from './pages/CreateProduct/Jumbotron'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home/>} />
        <Route path={'/createproduct'} element={<Create/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
