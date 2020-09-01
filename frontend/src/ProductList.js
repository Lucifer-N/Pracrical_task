import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    let settings = {
      url: "http://localhost:4001/product/getProduct",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios(settings)
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {products &&
        products.map((p, i) => (
          <ul>
            <li key={i}>{p._id}</li>
            <li>{p.SKU}</li>
            <li>{p.name}</li>
            <li>{p.price}</li>
            <li>{p.category}</li>
            <li>{p.quantity}</li>
          </ul>
        ))}
    </div>
  );
};

export default ProductList;
