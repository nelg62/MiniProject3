const express = require("express");
const app = express();
require("dotenv").config();

let dbConnect = require("./dbConnect");

app.use(express.json());

app.use('/', express.static('public'))

let postRoutes = require("./routes/postRoutes");
let likeRoutes = require("./routes/likeRoutes");
let userRoutes = require("./routes/userRoutes");

app.use("/posts", postRoutes);
app.use("/likes", likeRoutes);
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Mysql application." });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
