import React from 'react'
import List from './List'

const Form = () => {
  return (
  <div className='h-screen '>
      <div className='container mx-auto'>
        <div className='items-center h-screen'>
            <h1 className='text-xl text-center lg:text-xl xl:text-4xl font-bold mt-20 pt-9  mb-4 text-black'>
              Create Product
            </h1>
            <p className='text-center lg:text-lg xl:text-2xl text-black'>
              We are team of talented designers makin websites with...
            </p>
            <List/>
        </div>

      </div>
    </div>
  )
}

export default Form
