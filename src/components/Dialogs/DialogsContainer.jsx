import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthNavigate } from "./../../hoc/withAuthNavigate";

let DialogsContainer = (props) => {
  return (
    <div>
      <Dialogs profile={props.profile} state={props.state} />
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    state: state.dialogsPage,
  };
};

export default compose(connect(mapStateToProps), withAuthNavigate)(DialogsContainer);
