import "./index.css";
import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store"

let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={store.getState()}
          addPost={store.addPost.bind(store)}
          updateNewPostText={store.updateNewPostText.bind(store)}
          sendMessage={store.sendMessage.bind(store)}
          updateNewMessageText={store.updateNewMessageText.bind(store)}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

export default rerenderEntireTree;

rerenderEntireTree(store.getState)
store.subscribe(rerenderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
