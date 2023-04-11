import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ToastContainer } from "react-toastify";
import { fontFamilies } from "./utils/constant";
import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${fontFamilies.primary};
    h1, h2, h3, h4, h5, h6 {
      color: #fff;
    }
  }
`;
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <App />
    <GlobalStyle />
    <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
  </>
);
