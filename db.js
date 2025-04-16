const mongoose = require("mongoose");

const connectDB = async() => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/mydatabase?usernewparser=true", {
            useUnifiedTopology: true
        });
        console.log("Connected to local MongoDB");
        }
        catch (error) {
            console.error("MongoDB connection error:", error);
            process.exit(1);
    }
};

module.exports = connectDB