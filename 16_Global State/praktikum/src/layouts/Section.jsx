import React from 'react'

const Section = () => {
  return (
    <section className="bg-blue-50 pt-9 pb-9">
      <div className="text-center gird justify-center items-center ">
        <h3 className="text-4xl font-semibold text-black-300 mb-8">
          Powering your business
        </h3>
        <p className="text-black-300 text-lg mb-9">
          Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita
          voluptas culpa sapiente.
        </p>
        <input
          type="text"
          className="w-[600px] bg-white border border-blue-500  rounded-3xl px-4 py-4 sm:mb-0 sm:mr-2 text-blue-950 placeholder-gray-500"
          placeholder="Your email…"
          aria-label="Your email…"
        />
        <a
          className="btn p-4 text-white rounded-2xl bg-blue-600 hover:bg-blue-700 shadow"
          href="#0"
        >
          Subscribe
        </a>
      </div>
    </section>
  )
}

export default Section
