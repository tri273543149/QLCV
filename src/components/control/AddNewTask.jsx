import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/index";

class AddNewTask extends Component {
  handleOnClick = () => {
    this.props.onIsAddNewTask();
    this.props.onClearForm();
  };
  render() {
    return (
      <button
        type="button"
        className="btn mt-2 btn--newTask"
        data-toggle="modal"
        data-target="#modalTask"
        onClick={this.handleOnClick}
      >
        <i className="fa fa-pencil-square-o" />
        Tạo Task mới
      </button>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onIsAddNewTask: () => {
      dispatch(actions.isAddNewTask());
    },
    onClearForm: () => {
      dispatch(actions.clearForm());
    },
  };
};
export default connect(null, mapDispatchToProps)(AddNewTask);
