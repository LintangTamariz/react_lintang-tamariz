import React, { useState } from "react";
import { Link } from "react-router-dom";


const Table = ({ formData, onDelete, onEdit }) => {
  
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
                {formData.map((data, index) => (
                  <tr key={index}>
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
                      {data.productName}
                    </td>
                    <td
                      scope="col"
                      className="border-r px-6 py-4 dark:border-neutral-500"
                    >
                      {data.category}
                    </td>
                    <td
                      scope="col"
                      className="border-r px-6 py-4 dark:border-neutral-500"
                    >
                      {data.freshness}
                    </td>
                    <td
                      scope="col"
                      className="border-r px-6 py-4 dark:border-neutral-500"
                    >
                      {data.price}
                    </td>
                    <td>
                      <Link
                        to={`/edit/${index}`}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                      >
                        Edit
                      </Link>
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
    </div>
  );
};

export default Table;
