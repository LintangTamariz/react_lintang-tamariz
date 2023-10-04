import React from "react";

const List = ({
  id,
  label,
  value,
  type,
  placeholder,
  onChange,
  name,
  checked,
}) => {
  return (
    <div className="w-full mt-10">
      <label
        className={`block mb-2 text-sm font-medium text-gray-00 dark:text-black `}
      >
        {label}
      </label>
      {type === "text" && (
        <input
          id={id}
          name={name}
          value={value}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          className={`border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        />
      )}

      {type === "select" && (
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        >
          {placeholder && <option value="">{placeholder}</option>}
          <option value="One">One</option>
          <option value="Two">Two</option>
          <option value="Three">Three</option>
        </select>
      )}

      {type === "file" && (
        <input
          id={id}
          name={name}
          value={value}
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        />
      )}

      {type === "textarea" && (
        <input
          id={id}
          name={name}
          value={value}
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          className={`block w-full p-4 text-gray-900 border border-gray-300 rounded-lg  sm:text-md focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        />
      )}

      {type === "number" && (
        <input
          id={id}
          name={name}
          value={value}
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        />
      )}
    </div>
  );
};

export default List;
