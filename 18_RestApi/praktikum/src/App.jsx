
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './pages/Form'
// import Edit from './pages/Edit'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form/>}/>
        {/* <Route path="/edit/:idex" element={<Edit/>}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
