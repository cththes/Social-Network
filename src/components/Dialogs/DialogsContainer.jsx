import React from "react";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthNavigate } from "./../../hoc/withAuthNavigate";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    state: state.dialogsPage,
  };
};

export default compose(
  connect(mapStateToProps),
  withAuthNavigate
)(Dialogs);

