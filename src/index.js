const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

// Automatically processing JSON
// app.use((req, res, next) => {
//     res.status(503).send("Under construction");
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port);