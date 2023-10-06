import React, { useState, useEffect } from "react";
import List from "../component/List";
import Button from "../component/Button";
import Table from "../component/Table";
import axios from "axios";

const Form = () => {
    const [productData, setProductData] = useState([]);
    const [formData, setFormData] = useState({
      productName: "",
      category: "",
      file: "",
      freshness: "",
      description: "",
      price: 0,
    });
  
    useEffect(() => {
      // Fetch initial product data when the component mounts
      axios
        .get("https://651e7e9e44a3a8aa4768768e.mockapi.io/products/product")
        .then((response) => {
          setProductData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching product data:", error);
        });
    }, []);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Send a POST request to the mock API to create a new product
      axios
        .post("https://651e7e9e44a3a8aa4768768e.mockapi.io/products/product", formData)
        .then((response) => {
          // After successfully creating the product, update the productData state with the new data
          setProductData([...productData, response.data]);
        })
        .catch((error) => {
          console.error("Error creating product:", error);
        });
    };

    const handleDelete = (productId) => {
        // Send a DELETE request to the mock API to delete the product
        axios
          .delete(`https://651e7e9e44a3a8aa4768768e.mockapi.io/products/product/${productId}`)
          .then(() => {
            // After successfully deleting the product, update the productData state by filtering out the deleted product
            const updatedProductData = productData.filter((product) => product.id !== productId);
            setProductData(updatedProductData);
          })
          .catch((error) => {
            console.error("Error deleting product:", error);
          });
      };
  return (
    <div className="h-screen">
      <div className="container mx-auto">
        <div className="items-center h-screen">
          <h1 className="text-xl text-center lg:text-xl xl:text-4xl font-bold mt-20 pt-9  mb-4 text-black">
            Create Product
          </h1>
          <p className="text-center lg:text-lg xl:text-2xl text-black">
            We are team of talented designers makin websites with...
          </p>
          <form onSubmit={handleSubmit}>
            <List
              id="productName"
              label="Product Name"
              type="text"
              name="productName"
              placeholder="Type your product name..."
              value={formData.productName}
              onChange={handleChange}
            />

            <List
              id="category"
              label="Product Category"
              name="category"
              type="select"
              value={formData.category}
              onChange={handleChange}
            />

            <List
              id="file"
              label="Upload File"
              name="file"
              type="file"
              value={formData.file}
              onChange={handleChange}
            />

            <div className="w-full mt-10">
              <label htmlFor="freshness">Product Freshness</label>
              <div>
                <label>
                  <input
                    id="brandnew"
                    name="freshness"
                    type="radio"
                    value="Brand New"
                    onChange={handleChange}
                    checked={formData.freshness === "Brand New"}
                  />
                  Brand New
                </label>
              </div>
              <div>
                <label>
                  <input
                    id="secondhand"
                    name="freshness"
                    type="radio"
                    value="Second Hand"
                    onChange={handleChange}
                    checked={formData.freshness === "Second Hand"}
                  />
                  Second Hand
                </label>
              </div>
              <div>
                <label>
                  <input
                    id="refushibed"
                    name="freshness"
                    type="radio"
                    value="Refushibed"
                    onChange={handleChange}
                    checked={formData.freshness === "Refushibed"}
                  />
                  Refushibed
                </label>
              </div>
            </div>

            <List
              id="description"
              label="Description"
              name="description"
              type="textarea"
              value={formData.description}
              onChange={handleChange}
            />

            <List
              id="price"
              label="Price"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
            />
            <Button id="submit" type="submit" label="Create Product" />
          </form>
          <Table formData={productData} onDelete={handleDelete} />

        </div>
      </div>
    </div>
  );
};

export default Form;
