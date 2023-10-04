import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import { addProduct,updateProduct, deleteProduct, setEditIndex } from "../features/productSlice";

import List from "../component/List";
import Button from "../component/Button";
import Table from "../component/Table";

const Form = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.products.products);
  const editIndex = useSelector((state) => state.editIndex);
  console.log(formData)
  // console.log(formData)

  const validationSchema = Yup.object().shape({
    productName: Yup.string().required("Product name is required"),
    category: Yup.string().required("Product category is required"),
    file: Yup.string().required("File is required"),
    freshness: Yup.string().required("Product freshness is required"),
    description: Yup.string().required("Description is required"),
    price: Yup.number()
    .typeError("Price must be a number")
    .required("Product price is required")
    .positive("Price must be positive"),
  });

  // // const [formData, setFormData] = useState([]);
  // const [editIndex, setEditIndex] = useState(-1);


  const formik = useFormik({
    initialValues: {
      productName: "",
      category: "",
      file: "",
      freshness: "",
      description: "",
      price: "",
    },
    validationSchema,
    onSubmit: (values) => {
      if (editIndex === -1) {
        const newProduct = {
          productName: values.productName,
          category: values.category,
          freshness: values.freshness,
          price: values.price,
        };
        dispatch(addProduct(newProduct));
      } else {
        const updatedProduct = {
          productName: values.productName,
          category: values.category,
          freshness: values.freshness,
          price: values.price,
        };
        dispatch(updateProduct({index: editIndex, updatedProduct}))
        dispatch(setEditIndex(-1));
        // setEditIndex(-1)
      }
      formik.resetForm();


    },
  });
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    formik;

const handleEdit = (index) => {
  dispatch(setEditIndex(index));
  const itemToEdit = formData[index]
  formik.setValues({
    ...itemToEdit,
  });
  dispatch(setEditIndex(index))
};
const handleDelete = (index) => {
dispatch (deleteProduct(index));
};

return (
  <div className="h-screen ">
    <div className="container mx-auto">
      <div className="items-center h-screen">
        <h1 className="text-xl text-center lg:text-xl xl:text-4xl font-bold mt-20 pt-9  mb-4 text-black">
          Create Product
        </h1>
        <p className="text-center lg:text-lg xl:text-2xl text-black">
          We are team of talented designers makin websites with...
        </p>
        <form className="text-black" onSubmit={handleSubmit}>
          <label>
                      <List
            id="productName"
            label="Product Name"
            name="productName"
            type="text"
            placeholder="Type your product name..."
            value={values.productName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.productName && touched.productName && (
            <div className="error text-red-500">{errors.productName}</div>
          )}

          </label>

          <List
            id="category"
            label="Product Category"
            name="category"
            type="select"
            value={values.category}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="">Select a category</option>
            <option value="Category 1">Category 1</option>
            <option value="Category 2">Category 2</option>
            <option value="Category 3">Category 3</option>
          </List>
          {errors.category && touched.category && (
            <div className="error text-red-500">{errors.category}</div>
          )}

          <List
            id="file"
            label="Upload File"
            name="file"
            type="file"
            value={values.file}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.file && touched.file && (
            <div className="error text-red-500">{errors.file}</div>
          )}

          <div className="w-full mt-10">
            <label htmlFor="freshness">Product Freshness:</label>
            <div>
              <label>
                <input
                  id="brandnew"
                  name="freshness"
                  type="radio"
                  value="Brand New"
                  checked={values.freshness === "Brand New"}
                  onChange={handleChange}
                  onBlur={handleBlur}
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
                  checked={values.freshness === "Second Hand"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                Second Hand
              </label>
            </div>
            <div>
              <label>
                <input
                  id="refurbished"
                  name="freshness"
                  type="radio"
                  value="Refurbished"
                  checked={values.freshness === "Refurbished"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                Refurbished
              </label>
            </div>
          </div>
          {errors.freshness && touched.freshness && (
            <div className="error text-red-500">{errors.freshness}</div>
          )}
          <List
            id="description"
            label="Description"
            name="description"
            type="textarea"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.description && touched.description && (
            <div className="error text-red-500">{errors.description}</div>
          )}
          <List
            id="price"
            label="Price"
            name="price"
            type="number"
            value={values.price}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.price && touched.price && (
            <div className="error text-red-500">{errors.price}</div>
          )}
          <Button id="submit" type="submit" label="Create Product" />
        </form>
        <Table
          formData={formData}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </div>
    </div>
  </div>
);
};

export default Form;
