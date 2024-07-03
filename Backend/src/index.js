// This is a just a comment


const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());

let postRoutes = require("./routes/postRoutes");

app.use("/posts", postRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Mysql application." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port
  ${PORT}.`);
});
