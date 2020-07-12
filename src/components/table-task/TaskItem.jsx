import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/index";

class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStatus: "",
    };
  }
  handleOnChangeStatus = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        this.props.onChangeStatus(
          this.props.task.id,
          this.state.selectedStatus
        );
      }
    );
  };
  handleOnEditTask = () => {
    this.props.onEditTask(this.props.task);
    this.props.onIsEditTask();
  };
  getLabel = (label) => {
    let labelColor = "";
    switch (label) {
      case "Frontend":
        labelColor = "#389E0D";
        break;
      case "Backend":
        labelColor = "#722ED1";
        break;
      case "API":
        labelColor = "#13C2C2";
        break;
      case "Issue":
        labelColor = "#CF1322";
        break;
      default:
        break;
    }
    return labelColor;
  };
  render() {
    console.log("state status task item", this.state.selectedStatus);
    let { task, index } = this.props;
    console.log("props status task item", task.status);
    let elementLabel = task.labelArr.map((label, i) => {
      return (
        <i
          className="fa fa-circle"
          style={{ color: this.getLabel(label) }}
          key={i}
        />
      );
    });
    let elementPriority;
    let classPriority;
    switch (parseInt(task.priority, 10)) {
      case 1:
        elementPriority = "Cao";
        classPriority = "text-danger";
        break;
      case 2:
        elementPriority = "Trung Bình";
        classPriority = "text-warning";
        break;
      case 3:
        elementPriority = "Thấp";
        classPriority = "text-success";
        break;
      default:
        break;
    }
    let elementMember = task.memberIDArr.map((member, i) => {
      return (
        <img src={`./img/${member}.jpg`} key={i} className="user" alt="user" />
      );
    });
    let classStatus;
    switch (parseInt(task.status, 10)) {
      case 1:
        classStatus = "fa-spinner";
        break;
      case 2:
        classStatus = "fa-anchor";
        break;
      case 3:
        classStatus = "fa-check-square-o";
        break;
      case 4:
        classStatus = "fa-trash-o";
        break;
      default:
        classStatus = "fa-adjust";
        break;
    }
    return (
      <tr>
        <td className="text-center">{index + 1}</td>
        <td className="text-center">{task.name}</td>
        <td className="text-center">{elementLabel}</td>
        <td className={`${classPriority} font-weight-bold text-center`}>
          {elementPriority}
        </td>
        <td className="text-center">{elementMember}</td>
        <td className="text-center">
          <button
            type="button"
            className="btn btn-primary mr-1"
            data-toggle="modal"
            data-target="#modalTask"
            onClick={this.handleOnEditTask}
          >
            <i className="fa fa-cog"></i>
          </button>
          <button type="button" className="btn btn-danger">
            <i className="fa fa-trash"></i>
          </button>
          <div className="form-group d-inline ml-2">
            <select
              className="form-control d-inline w-50"
              name="selectedStatus"
              value={task.status}
              onChange={this.handleOnChangeStatus}
            >
              <option value={0}>Chưa cập nhật</option>
              <option value={1}>Đang tiến hành</option>
              <option value={2}>Chưa bắt đầu</option>
              <option value={3}>Hoàn thành</option>
              <option value={4}>Hủy bỏ</option>
            </select>
          </div>
        </td>
        <td className="text-center">
          <i className={`fa ${classStatus} mr-2`} />
        </td>
      </tr>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onEditTask: (taskEditing) => {
      dispatch(actions.editTask(taskEditing));
    },
    onIsEditTask: () => {
      dispatch(actions.isEditTask());
    }
  };
};
export default connect(null, mapDispatchToProps)(TaskItem);
