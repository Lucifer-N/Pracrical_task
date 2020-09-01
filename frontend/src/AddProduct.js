import React from "react";
import { useFormik } from "formik";
import axios from "axios";

const AddProductForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      category: "",
      quantity: "",
      image: "",
    },
    onSubmit: (values) => {
      let settings = {
        url: "http://localhost:4001/product/addProduct",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: values,
      };

      axios(settings)
        .then((res) => {
          console.log("Success");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <label htmlFor="price">Price</label>
      <input
        id="price"
        name="price"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.price}
      />
      <label htmlFor="category">Category</label>
      <input
        id="category"
        name="category"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.category}
      />
      <label htmlFor="category">QTY</label>
      <input
        id="quantity"
        name="quantity"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.quantity}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddProductForm;
