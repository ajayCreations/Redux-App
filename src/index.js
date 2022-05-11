import ReactDOM from "react-dom";
import App from "./App";
import "./main.css";

import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./reduxPractice/redux/store.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Header from './reduxPractice/containers/Header';

import ProductListing from './reduxPractice/containers/ProductListing';
import ProductDetail from './reduxPractice/containers/ProductDetials'

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
      <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route>404 Not Found!</Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

