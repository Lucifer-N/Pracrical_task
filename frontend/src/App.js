import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Signup from "./Signup";
import LoginForm from "./Login";
import AddProductForm from "./AddProduct";
import ProductList from "./ProductList.js";
import UpdateProduct from "./UpdateProduct";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/add-product">Add Product</Link>
            </li>
            <li>
              <Link to="/list-product">List Product</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/signup">
            <h1>Sign up </h1>
            <Signup />
          </Route>
          <Route path="/login">
            <h1>Log in </h1>
            <LoginForm />
          </Route>
          <Route path="/add-product">
            <h1>Add Product</h1>
            <AddProductForm />
          </Route>
          <Route path="/update-product/:id">
            <h1>Add Product</h1>
            <UpdateProduct />
          </Route>
          <Route path="/list-product">
            <h1>List Products</h1>
            <ProductList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
