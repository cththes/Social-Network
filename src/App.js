import React from "react";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { Routes, Route } from "react-router-dom";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route element={<Profile posts={props.state.profilePage.postsData} addPost={props.addPost} />} path="profile" />
          <Route element={<Dialogs state={props.state.dialogsPage} sendMessage={props.sendMessage}/>} path="dialogs/*" />
          <Route path="news" />
          <Route path="music" />
          <Route path="settings" />
        </Routes>
      </div>
    </div>
  );
};

export default App;
