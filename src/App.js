import React, { Component, Suspense } from "react";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import store from "./redux/redux-store";

import { initializeApp } from "./redux/app-reducer";

import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import { withRouter } from "./components/Profile/ProfileContainer";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login"
import Music from "./components/Music/Music";
import Preloader from "./components/Common/Preloader/Preloader";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);

class App extends Component {
  componentDidMount() {
      this.props.initializeApp();
  }

  render() {
      if (!this.props.initialized) {
          return <Preloader />
      }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route element={<ProfileContainer />} path="profile" />
              <Route element={<Login />} path="login" />
              <Route element={<ProfileContainer />} path="profile/:userId" />
              <Route element={<DialogsContainer />} path="dialogs/*" />
              <Route element={<UsersContainer />} path="users/*" />
              <Route path="news" />
              <Route element={<Music />} path="music" />
              <Route path="settings" />
            </Routes>
          </Suspense>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const SocialNetworkApp = (props) => {
  return (
    <Router>
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    </Router>
  );
};

export default SocialNetworkApp;
