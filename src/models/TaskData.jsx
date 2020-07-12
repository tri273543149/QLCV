const randomId = require("random-id")

const TaskData = [
  {
    id: randomId(5, "aA0"),
    name: "Soạn ReactJS",
    labelArr: ["Frontend", "Backend"],
    priority: 1,
    status: 1,
    memberIDArr: ["user_2"],
    description: "Phải soạn ReactJS kèm với NodeJS và Redux",
  },
  {
    id: randomId(5, "aA0"),
    name: "Dạy AngularJS",
    labelArr: ["Frontend", "API"],
    priority: 2,
    status: 2,
    memberIDArr: ["user_4", "user_3"],
    description: "Nội dung của Angular",
  },
  {
    id: randomId(5, "aA0"),
    name: "Soạn Python",
    labelArr: ["Backend"],
    priority: 2,
    status: 3,
    memberIDArr: ["user_3", "user_5"],
    description: "Soạn python phải tập trung vào game và giải quyết vấn đề",
  },
  {
    id: randomId(5, "aA0"),
    name: "Thi Hackathon",
    labelArr: ["Frontend", "Backend", "Issue"],
    priority: 3,
    status: 4,
    memberIDArr: ["user_2", "user_3", "user_6"],
    description: "Cuộc thi Hackathon tư duy và khả năng coding",
  },
  {
    id: randomId(5, "aA0"),
    name: "CSDL MongoDB",
    labelArr: ["Backend", "Issue"],
    priority: 2,
    status: 2,
    memberIDArr: ["user_2", "user_4",],
    description: "Xậy dựng cơ sở dữ liệu NoSQL MongoDB",
  },
  {
    id: randomId(5, "aA0"),
    name: "Bài tập SocketIO",
    labelArr: ["Backend"],
    priority: 3,
    status: 1,
    memberIDArr: ["user_3"],
    description: "Thiết kế bài tập SocketIO",
  },
];
export default TaskData;
