const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// Route to create a new user
router.post("/create", (req, res) => {
  Controllers.userController.createUser(req, res);
});

// Route to get a specific user by ID
router.get("/getUser/:userid", (req, res) => {
  Controllers.userController.getUser(req, res);
});

// Route to get all users
router.get("/getUsers", (req, res) => {
  Controllers.userController.getUsers(req, res);
});

// Route to update a specific user by ID
router.put("/updateUser/:userid", (req, res) => {
  Controllers.userController.updateUser(req, res);
});

// Route to delete a specific user by ID
router.delete("/deleteUser/:userid", (req, res) => {
  Controllers.userController.deleteUser(req, res);
});

module.exports = router;
