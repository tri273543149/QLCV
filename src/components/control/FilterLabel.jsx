import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/index";

class FilterLabel extends Component {
  render() {
    return (
      <div className="filter filter--label">
        <ul className="list-unstyled text-left">
          <li
            className="py-1 display-5 lead"
            onClick={() => this.props.onFilter("label", "Frontend")}
          >
            <i className="fa fa-circle mr-2" />
            Frontend
          </li>
          <li
            className="py-1 display-5 lead"
            onClick={() => this.props.onFilter("label", "Backend")}
          >
            <i className="fa fa-circle mr-2" />
            Backend
          </li>
          <li
            className="py-1 display-5 lead"
            onClick={() => this.props.onFilter("label", "API")}
          >
            <i className="fa fa-circle mr-2" />
            API
          </li>
          <li
            className="py-1 display-5 lead"
            onClick={() => this.props.onFilter("label", "Issue")}
          >
            <i className="fa fa-circle mr-2" />
            Issue
          </li>
        </ul>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onFilter: (filterType, filterValue) => {
      dispatch(actions.filter(filterType, filterValue));
    },
  };
};
export default connect(null, mapDispatchToProps)(FilterLabel);
