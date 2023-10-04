import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Create from './pages/Create'
import Edit from './pages/Edit'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/createproduct'} element={<Create/>}/>
      <Route path={'/edit/:id'} element={<Edit/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
