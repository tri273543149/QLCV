import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/index";

class InitializeTask extends Component {
  render() {
    return (
      <button
        type="button"
        className="btn mt-2 btn--initializeTask"
        onClick={this.props.handleOnInitializeTask}
      >
        Local storage
      </button>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleOnInitializeTask: () => {
      dispatch(actions.initializeTasks());
    },
  };
};
export default connect(null, mapDispatchToProps)(InitializeTask);
