const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Import routes
const addTask = require("./routes/addTask");
const getTasks = require("./routes/getTasks");
const updateTask = require("./routes/updateTask");
const deleteTask = require("./routes/deleteTask");

// Use routes
app.use("/tasks", getTasks);
app.use("/tasks", addTask);
app.use("/tasks", updateTask);
app.use("/tasks", deleteTask);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




// DB_HOST=localhost
// DB_USER=root
// DB_PASS=
// DB_NAME=todo_db
// PORT=5000


// # add : http://localhost:5000/tasks
// # read : http://localhost:5000/tasks
// # update : http://localhost:5000/tasks/1
// # delete : http://localhost:5000/tasks/1
