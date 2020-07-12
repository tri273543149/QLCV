class ListOfTask {
  constructor() {
    this.List = [];
  }
  addNewTask = (newTask) => {
    this.List = [...this.List, newTask];
  };
}
export default ListOfTask;
