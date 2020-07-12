import React, { Component } from "react";
import AddNewTask from "./control/AddNewTask";
import InitializeTask from "./control/InitializeTask";
import FilterStatus from "./control/FilterStatus";
import FilterPriority from "./control/FilterPriority";
import Sort from "./control/Sort";
import FilterLabel from "./control/FilterLabel";

class Control extends Component {
  render() {
    return (
      <div className="col-md-3 text-center px-0">
        <div className="header header--left d-flex align-items-center">
          <img src="./img/user_1.jpg" className="ml-2 user" alt="user" />
          <h3 className="text-white d-inline font-weight-light ml-2">
            Lê Quang Song
          </h3>
        </div>
        <AddNewTask />
        <InitializeTask />
        <div className="px-3">
          <FilterStatus />
          <FilterLabel />
          <FilterPriority />
          <Sort />
        </div>
      </div>
    );
  }
}
export default Control;
