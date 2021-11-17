import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route element={<Profile />} path="/profile" />
          <Route element={<Dialogs />} path="/dialogs" />
          <Route path="/news" />
          <Route path="/music" />
          <Route path="/settings" />
        </Routes>
      </div>
    </div>
  );
};

export default App;
