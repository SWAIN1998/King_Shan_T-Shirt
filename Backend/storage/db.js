const mongoose = require("mongoose");
const db = mongoose.connection;

mongoose.connect("mongodb+srv://Rakesh:Rakesh@cluster0.ynsczpn.mongodb.net/T-shirt?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    console.log("Connected to MongoDB");
});
module.exports = db;