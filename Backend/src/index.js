const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

let dbConnect = require("./dbConnect");

// Importing route models
const postRoutes = require("./routes/postRoutes");
const likeRoutes = require("./routes/likeRoutes");
const userRoutes = require("./routes/userRoutes");

// Cors config to allow frount and backend connections
app.use(
  cors({
    origin: "https://master--miniproject3glenharding.netlify.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

app.use("/", express.static("public"));

app.options(
  "*",
  cors({
    origin: "https://master--miniproject3glenharding.netlify.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

// handle routes
app.use("/posts", postRoutes);
app.use("/likes", likeRoutes);
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Mysql application." });
});

// server port
const PORT = process.env.PORT || 8080;

// start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
