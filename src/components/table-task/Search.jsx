import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/index";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keySearch: "",
    };
  }
  handleOnSearch = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        this.props.onSearch("search", this.state.keySearch);
      }
    );
  };
  render() {
    return (
      <div className="form-group text-left my-0">
        <input
          type="text"
          className="form-control"
          placeholder="Tìm kiếm công việc"
          name="keySearch"
          onKeyUp={this.handleOnSearch}
        />
      </div>
    );
  }
}
const mapDispatchToProp = (dispatch) => {
  return {
    onSearch: (filterType, filterValue) => {
      dispatch(actions.filter(filterType, filterValue));
    },
  };
};
export default connect(null, mapDispatchToProp)(Search);
