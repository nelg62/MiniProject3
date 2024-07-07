const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// Route to create a like
router.post("/createLike", (req, res) => {
  Controllers.likeController.createLike(req, res);
});

// Route to toggle a like
router.post("/toggleLike", (req, res) => {
  Controllers.likeController.toggleLike(req, res);
});

// Route to get all likes on a specific post
router.get("/getAllLikesonPost/:postid", (req, res) => {
  Controllers.likeController.getAllLikesOnPost(req, res);
});

// Route to get all likes on a specific comment
router.get("/getAllLikesOnComment/:commentid", (req, res) => {
  Controllers.likeController.getAllLikesOnComment(req, res);
});

// Route to delete a like by its ID
router.delete("/deleteLike/:likeid", (req, res) => {
  Controllers.likeController.deleteLike(req, res);
});

// Route to delete all likes on a specific post
router.delete("/deleteAllLikesOnPost/:postid", (req, res) => {
  Controllers.likeController.deleteAllLikesOnPost(req, res);
});

// Route to delete all likes on a specific comment
router.delete("/deleteAllLikesOnComment/:commentid", (req, res) => {
  Controllers.likeController.deleteAllLikesOnComment(req, res);
});

module.exports = router;
