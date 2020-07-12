import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/index";

class FilterPriority extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: "",
    };
  }
  onChange = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        this.props.onFilter("priority", this.state.selectedIndex);
      }
    );
  };
  render() {
    return (
      <div className="form-group text-left">
        <label>Độ ưu tiên</label>
        <select
          className="form-control"
          name="selectedIndex"
          onChange={this.onChange}
        >
          <option value={-1} className="font-weight-bold">
            Tất cả
          </option>
          <option value={3} className="text-info font-weight-bold">
            Thấp
          </option>
          <option value={2} className="text-success font-weight-bold">
            Trung bình
          </option>
          <option value={1} className="text-danger font-weight-bold">
            Cao
          </option>
        </select>
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
export default connect(null, mapDispatchToProps)(FilterPriority);
