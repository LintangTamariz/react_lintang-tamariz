import React, {useState} from "react";
import Swal from 'sweetalert2'

const List = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    freshness: "Brand New",
    price: "",
  });

  const [tableData, setTableData] = useState([]);
  const [editing, setEdit] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const generateRandomId = () => {
    return Math.floor(Math.random() * 100);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name.length > 25) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Last Name must not exceed 25 characters.",
        confirmButtonText: "OK",
      });
      return;
    } else if (formData.name.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid product name.",
        confirmButtonText: "OK",
      });
      return;
    }

    const randomId = formData.id || generateRandomId();

    const dataWithId = { ...formData, id: randomId };

    if (editing) {
      const updateData = tableData.map((item) =>
        item.id === randomId ? dataWithId : item
      );
      setTableData(updateData);
      setEdit(false);
    } else {
      setTableData([...tableData, dataWithId]);
    }

    setFormData({
      name: "",
      category: "",
      freshness: "Brand New",
      price: 0,
    });
  };

  const handleEdit = (id) => {
    const editItem = tableData.find((data) => data.id === id);
    if (editItem) {
      setFormData(editItem);
      setEdit(true);
    }
  };

  const handleDelete = (index) => {
    const updateTable = [...tableData];
    updateTable.splice(index, 1);
    setTableData(updateTable);
  };

  return (
    <div>
      <form
        action=""
        className="flex flex-col items-center mt-20 "
        onSubmit={handleSubmit}
      >
        <div className="w-full mt-10">
          <label
            htmlFor="product"
            className="block mb-2 text-sm font-medium text-gray-00 dark:text-black"
          >
            Product name
          </label>
          <input
            type="text"
            aria-describedby="helper-text-explanation"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          productFreshness
        </div>
        <div className="w-full mt-10">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Product Category
          </label>
          <select
            id="product"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="productName"
            value={formData.category}
            onChange={handleInputChange}
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
            htmlFor="user_avatar"
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
          <div className="flex items-center mb-4">
            <input
              id="freshness-option-1"
              type="radio"
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:border-gray-600"
              name="freshness"
              value={formData.freshness}
              onChange={handleInputChange}
            />

            <label
              htmlFor="freshness-option-1"
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
              value={formData.freshness}
              onChange={handleInputChange}
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="country-option-2"
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
              value={formData.freshness}
              onChange={handleInputChange}
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:border-gray-600"
            />
            <label
              htmlFor="freshness-option-3"
              className="block ml-2 text-sm font-medium  dark:text-black"
            >
              Refubhisnes
            </label>
          </div>
        </fieldset>
        <div className="w-full mt-10">
          <label
            htmlFor="large-input"
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
        <div className="w-full mt-10">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-00 dark:text-black"
          >
            Product Price
          </label>
          <input
            type="number"
            aria-describedby="helper-text-explanation"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 w-full mt-12 p-3 rounded-xl text-white"
        >
          Create Account
        </button>
      </form>

      <div className="w-full mt-10">
                <table className="min-w-full text-center text-sm font-light">
                  <thead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                    <tr>
                      <th scope="col" className=" px-6 py-4">
                        No
                      </th>
                      <th scope="col" className=" px-6 py-4">
                        Product Name
                      </th>
                      <th scope="col" className=" px-6 py-4">
                        Product Category
                      </th>
                      <th scope="col" className=" px-6 py-4">
                        Product Freshness
                      </th>
                      <th scope="col" className=" px-6 py-4">
                        Product Price
                      </th>
                      <th scope="col" className=" px-6 py-4">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                  {tableData.map((data, index) => (
                        <tr key={index}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.category}</td>
                            {/* <td>{data.image}</td> */}
                            <td>{data.freshness}</td>
                            {/* <td>{data.description}</td> */}
                            <td>{data.price}</td>
                            <td>
                                <button className='bg-red-600 w-30 mr-5 p-3 rounded-xl text-white' onClick={() => handleDelete(index)}>Delete</button>
                                <button className='bg-green-600 w-30 mt-5 p-3 rounded-xl text-white 'onClick={() => handleEdit(data.id)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
  );
};

export default List;
