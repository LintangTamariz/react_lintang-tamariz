import React from 'react';
import Navbar from '../component/Navbar';

import Jumbotron from '../pages/Jumbotron';
import Form from '../pages/Form';

function SimpleHeader() {
  return (
    <div>
      <Navbar/>
      <Jumbotron/>
      <Form/>
    </div>
  )
}

export default SimpleHeader
