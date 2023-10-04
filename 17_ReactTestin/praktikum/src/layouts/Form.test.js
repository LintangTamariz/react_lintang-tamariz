import React from "react";
import {render} from "@testing-library/react";

import Form from "./Form";
import {Provider} from "react-redux";
import store from "../store";

it ("renders create product form correctly", () => {
  const {getByLabelText} = render (
    <Provider store={store}>
      <Form/>
    </Provider>
  );

  const productNameLabel = getByLabelText("Product Name");
  // const categoryLabel = getByLabelText("Product Category");
  // const uploadFileLabel = getByLabelText("Upload File");
  // const productFreshnessLabel = getByLabelText("Product Freshness");
  // const descriptionLabel = getByLabelText("Description");
  // const priceLabel = getByLabelText("Product Price");


  expect(productNameLabel).toBeDefined();
  // expect(categoryLabel).toBeDefined();
  // expect(uploadFileLabel).toBeDefined();
  // expect(productFreshnessLabel).toBeDefined();
  // expect(descriptionLabel).toBeDefined();
  // expect(priceLabel).toBeDefined();
})

