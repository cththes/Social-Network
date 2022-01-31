import React from "react";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthNavigate } from "./../hoc/withAuthNavigate";

let mapStateToProps = (state) => {
  return {
    state: state.dialogsPage,
  };
};

let AuthNavigateComponent = withAuthNavigate(Dialogs);

const DialogsContainer = connect(mapStateToProps)(AuthNavigateComponent);

export default DialogsContainer;
