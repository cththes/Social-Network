import React, { Component, Suspense } from "react";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./redux/redux-store";

import { initializeApp } from "./redux/app-reducer";

import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import { withRouter } from "./components/Profile/ProfileContainer";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Music from "./components/Music/Music";
import Preloader from "./components/Common/Preloader/Preloader";
import Settings from "./components/Settings/Settings";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    /*if (!this.props.initialized) {
      return <Preloader />;
    }*/
    return (
      <div className="app">
        <HeaderContainer />
        <div className="app-wrapper">
          <Navbar />
          <div className="app-wrapper-content">
            <Suspense fallback={<Preloader />}>
              <Routes>
                <Route element={<ProfileContainer />} path="profile" />
                <Route element={<Login />} path="login" />
                <Route element={<ProfileContainer />} path="profile/:userId" />
                <Route element={<DialogsContainer />} path="dialogs/*" />
                <Route path="news" />
                <Route element={<Music />} path="music" />
                <Route element={<Settings />} path="settings" />
                <Route element={<UsersContainer />} path="users/*" />
              </Routes>
            </Suspense>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

let AppContainer = compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);

const SocialNetworkApp = (props) => {
  return (
    <Router>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </Router>
  );
};

export default SocialNetworkApp;
