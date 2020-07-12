class Task {
  constructor(id, name, labelArr, priority, status, memberIDArr, description) {
    this.id = id;
    this.name = name;
    this.labelArr = labelArr;
    this.priority = priority;
    this.status = status;
    this.memberIDArr = memberIDArr;
    this.description = description;
  }
}
export default Task;