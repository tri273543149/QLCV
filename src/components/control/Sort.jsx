import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/index";

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortValue: "",
    };
  }
  handleOnChange = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        this.props.onSort("sort", this.state.sortValue);
      }
    );
  };
  render() {
    return (
      <div className="form-group text-left">
        <label>Sắp xếp theo công việc</label>
        <select
          className="form-control"
          name="sortValue"
          onChange={this.handleOnChange}
        >
          <option value="asc">Từ A đến Z</option>
          <option value="desc">Từ Z đến A</option>
        </select>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSort: (filterType, filterValue) => {
      dispatch(actions.filter(filterType, filterValue));
    },
  };
};
export default connect(null, mapDispatchToProps)(Sort);
