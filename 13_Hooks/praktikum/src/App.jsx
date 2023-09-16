import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import SimpleHeader from './layouts/Simple-header';
import Edit from './pages/Edit'

function App() {
  return (
   <BrowserRouter>
    <Routes>
        <Route path={'/'} element={<SimpleHeader/>}></Route>
        <Route path={'edit'} element={<Edit/>}></Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
