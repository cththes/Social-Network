import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { addPost } from "./redux/state";
import { sendMessage } from "./redux/state";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} sendMessage={sendMessage} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

export default rerenderEntireTree;
