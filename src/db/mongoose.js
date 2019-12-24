const mongoose = require("mongoose");
// Connect to the db
mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

