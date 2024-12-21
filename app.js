const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

const TASKS = [
  {
    name: "Breakfast",
  },
  {
    name: "Study",
  },
  {
    name: "Football",
  },
];

app.get("/get-tasks", (req, res) => {
  res.json({
    tasks: TASKS,
  });
});
app.post("/add-task", (request, response) => {
  // console.log(request.body.task);

  //add task into TASKS array--
  TASKS.push({
    name: request.body.task,
  });

  //return JSON response
  response.json({
    message: "Task added",
  });
});

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
