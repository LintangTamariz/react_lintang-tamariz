import React, { useEffect, useState } from "react";
import axios from "axios";

const Table = ({ onDelete }) => {
  const [product, setProduct] = useState([]);
  const [newProduct, setNewProduct] = useState({
    product_name: "",
    product_category: "",
    product_freshness: "",
    price: "",
  });


  const apiUrl = "https://651e7e9e44a3a8aa4768768e.mockapi.io/products/product";

  const getAllProduct = () => {
    axios
      .get("https://651e7e9e44a3a8aa4768768e.mockapi.io/products/product")
      .then((response) => {
        setProduct(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = () => {
    axios
      .post("https://651e7e9e44a3a8aa4768768e.mockapi.io/products/product", newProduct)
      .then((response) => {

        setProduct([...product, response.data]);


        setNewProduct({
          product_name: "",
          product_category: "",
          product_freshness: "",
          price: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <div className="flex flex-col mt-10">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full border text-center text-sm font-light dark:border-neutral-500">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-500"
                  >
                    No
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-500"
                  >
                    Product Name
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-500"
                  >
                    Product Category
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-500"
                  >
                    Product Freshness
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-500"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-500"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {product?.map((item, index) => (
                  <tr key={item.id}>
                    <td
                      scope="col"
                      className="border-r px-6 py-4 dark:border-neutral-500"
                    >
                      {index + 1}
                    </td>
                    <td
                      scope="col"
                      className="border-r px-6 py-4 dark:border-neutral-500"
                    >
                      {item.product_name}
                    </td>
                    <td
                      scope="col"
                      className="border-r px-6 py-4 dark:border-neutral-500"
                    >
                      {item.product_category}
                    </td>

                    <td
                      scope="col"
                      className="border-r px-6 py-4 dark:border-neutral-500"
                    >
                      {item.product_freshness}
                    </td>

                    <td
                      scope="col"
                      className="border-r px-6 py-4 dark:border-neutral-500"
                    >
                      {item.price}
                    </td>
                    <td>
                      <button
                        onClick={() => onEdit(index)}
                        className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => onDelete(index)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="mt-4 m-5">
        <h2 className="text-xl font-semibold mb-2">Create Product</h2>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Product Name"
            className="border p-2"
            value={newProduct.product_name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, product_name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Product Category"
            className="border p-2"
            value={newProduct.product_category}
            onChange={(e) =>
              setNewProduct({
                ...newProduct,
                product_category: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="Product Freshness"
            className="border p-2"
            value={newProduct.product_freshness}
            onChange={(e) =>
              setNewProduct({
                ...newProduct,
                product_freshness: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="Price"
            className="border p-2"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
          />
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
