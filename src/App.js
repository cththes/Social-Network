import React from "react";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { Routes, Route } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route element={<ProfileContainer />} path="profile" />
          <Route element={<Login />} path="login" />
          <Route element={<ProfileContainer />} path="profile/:userId" />
          <Route element={<DialogsContainer />} path="dialogs/*" />
          <Route element={<UsersContainer />} path="users/*" />
          <Route path="news" />
          <Route path="music" />
          <Route path="settings" />
        </Routes>
      </div>
    </div>
  );
};

export default App;
