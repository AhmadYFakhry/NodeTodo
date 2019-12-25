const mongoose = require("mongoose");
// Connect to the db
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});