const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.post("/create", (req, res) => {
  Controllers.userController.createUser(req, res);
});

router.get("/getUser/:userid", (req, res) => {
  Controllers.userController.getUser(req, res);
});

router.get("/getUsers", (req, res) => {
  Controllers.userController.getUsers(req, res);
});

router.put("/updateUser/:userid", (req, res) => {
  Controllers.userController.updateUser(req, res);
});

router.delete("/deleteUser/:userid", (req, res) => {
  Controllers.userController.deleteUser(req, res);
});

module.exports = router;
