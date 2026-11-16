
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("My Node.js Backend is Working!");
});

app.get("/api/users", (req, res) => {
    res.json([
        { id: 1, name: "Abhijeet" },
        { id: 2, name: "Rahul" }
    ]);
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
