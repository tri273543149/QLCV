import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";

import Search from "./table-task/Search";
import Thead from "./table-task/Thead";
import TaskItem from "./table-task/TaskItem";

class TaskList extends Component {
  render() {
    let { tasks, filter } = this.props;
    console.log("tasks of TaskList", tasks);

    let filterTask = [];
    switch (filter.filterType) {
      case "status":
        if (parseInt(filter.filterValue, 10) === -1) {
          filterTask = tasks;
        } else {
          for (let task of tasks) {
            if (task.status === parseInt(filter.filterValue, 10)) {
              filterTask = [...filterTask, task];
            }
          }
        }
        break;
      case "label":
        for (let task of tasks) {
          for (let index in task.labelArr) {
            if (task.labelArr[index] === filter.filterValue) {
              filterTask = [...filterTask, task];
            }
          }
        }
        break;
      case "priority":
        if (parseInt(filter.filterValue, 10) === -1) {
          filterTask = tasks;
        } else {
          for (let task of tasks) {
            if (task.priority === parseInt(filter.filterValue, 10)) {
              filterTask = [...filterTask, task];
            }
          }
        }
        break;
      case "sort":
        filterTask = tasks;
        if (filter.filterValue === "asc") {
          filterTask.sort((a, b) => {
            let x = a.name.toLowerCase();
            let y = b.name.toLowerCase();
            if (x < y) return -1;
            if (x > y) return 1;
            return 0;
          });
        }
        if (filter.filterValue === "desc") {
          filterTask.sort((a, b) => {
            let x = a.name.toLowerCase();
            let y = b.name.toLowerCase();
            if (x < y) return 1;
            if (x > y) return -1;
            return 0;
          });
        }
        break;
      case "search":
        filterTask = tasks.filter((task) => {
          return (
            task.name
              .trim()
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .replace(/đ/g, "d")
              .replace(/Đ/g, "D")
              .indexOf(
                filter.filterValue
                  .trim()
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .replace(/đ/g, "d")
                  .replace(/Đ/g, "D")
              ) !== -1
          );
        });
        break;
      default:
        filterTask = tasks;
    }
    let elementItem = filterTask.map((task, index) => {
      return (
        <TaskItem
          task={task}
          key={index}
          index={index}
          onChangeStatus={this.props.onChangeStatus}
        />
      );
    });
    return (
      <div className="col-md-9 px-0">
        <div className="container-fluid px-0">
          <div className="row header header--right d-flex align-items-center mx-0">
            <div className="col-md-6">
              <div className=" d-flex justify-content-between">
                <h3 className="text-left ml-2 ">Danh sách công việc</h3>
              </div>
            </div>
            <div className="col-md-6">
              <Search />
            </div>
          </div>
        </div>
        <div className="px-3">
          <table className="table table-hover">
            <Thead />
            <tbody>{elementItem}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    filter: state.filter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onChangeStatus: (id, status) => {
      dispatch(actions.changeStatus(id, status));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
