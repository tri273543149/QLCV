import React, { Component } from "react";
import CheckboxGroup from "react-checkbox-group";
import randomId from "random-id";
import { connect } from "react-redux";
import * as actions from "../actions/index";

let len = 5;
let pattern = "aA0";

class ModalPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: randomId(len, pattern),
      name: "",
      description: "",
      priority: "",
      memberIDArr: [],
      labelArr: [],
    };
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  memberOnChange = (newMember) => {
    this.setState({
      memberIDArr: newMember,
    });
  };
  labelOnChange = (newLabel) => {
    this.setState({
      labelArr: newLabel,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (this.props.isAddNewTask) {
      this.props.handleOnAddNewTask(this.state);
    } else {
      this.props.handleOnUpdateTask(this.state);
    }
  };
  componentWillReceiveProps = (nextProps) => {
    if (nextProps && nextProps.editTask) {
      let {
        id,
        name,
        description,
        priority,
        memberIDArr,
        labelArr,
      } = nextProps.editTask;
      this.setState({
        id,
        name,
        description,
        priority,
        memberIDArr,
        labelArr,
      });
    }
  };
  render() {
    let { name, description, priority, memberIDArr, labelArr } = this.state;
    let { isAddNewTask } = this.props;
    return (
      <div className="modal fade" id="modalTask">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">
                {isAddNewTask ? "THÊM CÔNG VIỆC" : "CẬP NHẬT CÔNG VIỆC"}
              </h4>
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            <form onSubmit={this.onSubmit}>
              <div className="modal-body">
                <div className="form-group">
                  <label>Tên công việc:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    onChange={this.onChange}
                    value={name ? name : ""}
                  />
                </div>
                <div className="form-group">
                  <label>Mô tả:</label>
                  <textarea
                    className="form-control"
                    rows={2}
                    name="description"
                    onChange={this.onChange}
                    value={description ? description : ""}
                  />
                </div>
                <div className="form-group">
                  <label>Độ ưu tiên:</label>
                  <select
                    className="form-control"
                    name="priority"
                    onChange={this.onChange}
                    value={priority}
                  >
                    <option value={-1}>Chọn độ ưu tiên</option>
                    <option value={3}>Thấp</option>
                    <option value={2}>Trung bình</option>
                    <option value={1}>Cao</option>
                  </select>
                </div>
                <label>Người thực hiện:</label>
                <CheckboxGroup
                  name="memberIDArr"
                  value={memberIDArr ? memberIDArr : ""}
                  onChange={this.memberOnChange}
                >
                  {(Checkbox) => (
                    <>
                      <label>
                        <Checkbox value="user_2" />
                        Trương Tấn Khải
                      </label>
                      <label>
                        <Checkbox value="user_3" />
                        Đặng Trun Hiếu
                      </label>
                      <label>
                        <Checkbox value="user_4" />
                        Phó Nghĩa Văn
                      </label>
                      <label>
                        <Checkbox value="user_5" />
                        Nguyễn Tiến Minh Tuấn
                      </label>
                    </>
                  )}
                </CheckboxGroup>
                <br />
                <label>Nhãn:</label>
                <CheckboxGroup
                  name="labelArr"
                  value={labelArr ? labelArr : ""}
                  onChange={this.labelOnChange}
                >
                  {(Checkbox) => (
                    <>
                      <label>
                        <Checkbox value="Frontend" />
                        Frontend
                      </label>
                      <label>
                        <Checkbox value="Backend" />
                        Backend
                      </label>
                      <label>
                        <Checkbox value="API" />
                        API
                      </label>
                      <label>
                        <Checkbox value="Issue" />
                        Issue
                      </label>
                    </>
                  )}
                </CheckboxGroup>
              </div>
              <div className="modal-footer">
                <button
                  id="btnSubmit"
                  type="submit"
                  className={`btn ${isAddNewTask ? "btn-success" : "btn-info"}`}
                >
                  {isAddNewTask ? "Thêm mới" : "Cập nhật"}
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    editTask: state.editTask,
    isAddNewTask: state.isAddNewTask,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleOnAddNewTask: (newTask) => {
      dispatch(actions.addNewTask(newTask));
    },
    handleOnUpdateTask: (taskUpdating) => {
      dispatch(actions.updateTask(taskUpdating));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalPopup);
