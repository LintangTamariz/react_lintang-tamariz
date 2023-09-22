import React from "react";

const List = () => {
  return (
    <form action="" className="flex flex-col items-center mt-20">
      <div className="w-full mt-10">
        <label
          for="product"
          className="block mb-2 text-sm font-medium text-gray-00 dark:text-black"
        >
          Product name
        </label>
        <input
          type="text"
          aria-describedby="helper-text-explanation"
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@flowbite.com"
        />
      </div>
      <div className="w-full mt-10">
        <label
          for="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
        >
          Product Category
        </label>
        <select
          id="product"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option>One</option>
          <option>Two</option>
          <option>Three</option>
          <option>Four</option>
        </select>
      </div>

      <div className="w-full mt-10">
        <label
          className="block mb-2 text-sm font-medium dark:text-black"
          for="user_avatar"
        >
          Upload file
        </label>
        <input
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-blackfocus:outline-none  dark:border-gray-600 dark:placeholder-gray-400"
          aria-describedby="user_avatar_help"
          id="user_avatar"
          type="file"
        />
      </div>

      <fieldset className="w-full mt-10">
        <label
          htmlFor=""
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
        >
          Product Freshness
        </label>
        <div class="flex items-center mb-4">
          <input
            id="freshness-option-1"
            type="radio"
            name="freshness"
            value="BrandNew"
            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:border-gray-600"
            checked
          />
          <label
            for="freshness-option-1"
            className="block ml-2 text-sm font-medium text-black dark:text-black"
          >
            Brand New
          </label>
        </div>

        <div className="flex items-center mb-4">
          <input
            id="freshness-option-2"
            type="radio"
            name="freshness"
            value="SecondHand"
            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="country-option-2"
            className="block ml-2 text-sm font-medium dark:text-black"
          >
            Second Hand
          </label>
        </div>

        <div className="flex items-center mb-4">
          <input
            id="freshness-option-3"
            type="radio"
            name="freshness"
            value="Refubhisnes"
            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:border-gray-600"
          />
          <label
            for="freshness-option-3"
            className="block ml-2 text-sm font-medium  dark:text-black"
          >
            Refubhisnes
          </label>
        </div>
      </fieldset>
      <div className="w-full mt-10">
        <label
          for="large-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
        >
          Description
        </label>
        <input
          type="text"
          id="large-input"
          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg  sm:text-md focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <button className="bg-blue-600 w-full mt-12 p-3 rounded-xl text-white">
        Create Account
      </button>
    </form>
  );
};

export default List;
