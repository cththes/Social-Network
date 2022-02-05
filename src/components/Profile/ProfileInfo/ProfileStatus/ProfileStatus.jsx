import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };
  activateEditMode = () => {
    this.setState({
      editMode: !this.state.editMode,
    });
  };
  render() {
    return (
      <div>
        {this.state.editMode && (
          <div>
            <input
              onBlur={this.activateEditMode}
              value={this.props.status}
              autoFocus={true}
              onFocus={(e) => e.target.select()}
              onDoubleClick={this.activateEditMode}
            ></input>
          </div>
        )}{" "}
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status}
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
