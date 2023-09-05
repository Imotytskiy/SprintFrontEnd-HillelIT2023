import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/footer/footer";
import Body from "./components/body/body";
import SectionLearn from "./components/sectionlearn/section_learn";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Body />
    <SectionLearn />
    <Footer />
  </React.StrictMode>
);
