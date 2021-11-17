import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

let state = {
  profilePage: {
    postsData: [
      { id: "1", message: "hello" },
      { id: "2", message: "it's my 2nd post" },
    ],
  },
  dialogsPage: {
    dialogsData: [
      { name: "cth", id: "1" },
      { name: "FV", id: "2" },
      { name: "Valentin Oblomov", id: "3" },
    ],

    messagesData: [{ message: "hello" }],
  },
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App state={state} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
