import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData); // For demonstration, log the form data
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-center">
        <div className="w-full md:w-1/2">
          <h2 className="text-5xl font-bold mb-4">Contact Us</h2>
          <p className="mr-3 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium asperiores unde ducimus quibusdam hic iure repudiandae labore minima quo aut.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <form className="bg-white rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="text-xl appearance-none border rounded w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="name"
                name="name"
                placeholder="Please enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="text-xl appearance-none border rounded w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                id="email"
                name="email"
                placeholder="Please enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="message">
                What can we help
              </label>
              <textarea
                className="text-xl appearance-none border rounded w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                rows="4"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-center">
              <button
                className="bg-blue-700 w-full hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
