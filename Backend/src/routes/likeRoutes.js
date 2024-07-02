const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.post("/createLikeOnPost/:postid", (req, res) => {
  Controllers.likeController.createLikeOnPost(req, res);
});

router.post("/createLikeOnComment/:commentid", (req, res) => {
  Controllers.likeController.createLikeOnComment(req, res);
});

router.get("/getAllLikesonPost/:postid", (req, res) => {
  Controllers.likeController.getAllLikesOnPost(req, res);
});

router.get("/getAllLikesOnComment/:commentid", (req, res) => {
  Controllers.likeController.getAllLikesOnComment(req, res);
});

router.delete("/deleteLike/:likeid", (req, res) => {
  Controllers.likeController.deleteLike(req, res);
});

router.delete("/deleteAllLikesOnPost/:postid", (req, res) => {
  Controllers.likeController.deleteAllLikesOnPost(req, res);
});

router.delete("/deleteAllLikesOnComment/:commentid", (req, res) => {
  Controllers.likeController.deleteAllLikesOnComment(req, res);
});

module.exports = router;
