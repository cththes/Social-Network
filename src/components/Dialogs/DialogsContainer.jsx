import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthNavigate } from "./../../hoc/withAuthNavigate";
import { getUserProfile } from "../../redux/profile-reducer";

let mapStateToProps = (state) => {
  return {
    state: state.dialogsPage,
  };
};

export default compose(connect(mapStateToProps), withAuthNavigate)(Dialogs);
