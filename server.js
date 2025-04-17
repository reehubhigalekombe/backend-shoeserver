const express =  require("express");
const cors = require("cors");
const connectDB = require("./db");
const dotenv = require("dotenv");
require("dotenv").config();

const app = express();
connectDB();

const PORT = process.env.PORT || 5500;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello higal ther server is connected")
})
app.listen( PORT, () => {
    console.log(`Server is connected to port ${PORT}`)
});

