import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Body from "./components/body/body";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Body />
    <Footer />
  </React.StrictMode>
);
