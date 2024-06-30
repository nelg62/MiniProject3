const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.postController.getPosts(req, res);
});

router.post("/create", (req, res) => {
  Controllers.postController.createPost(req, res);
});

router.put("/:postid", (req, res) => {
  Controllers.postController.updatePost(req, res);
});

router.delete("/:postid", (req, res) => {
  Controllers.postController.deletePost(req, res);
});

router.get("/:postid/comments", (req, res) => {
  Controllers.postController.getCommentsOnPost(req, res);
});

router.post("/:postid/comments", (req, res) => {
  Controllers.postController.createComment(req, res);
});

router.put("/:postid/:commentid", (req, res) => {
  Controllers.postController.updateComment(req, res);
});

router.delete("/:postid/:commentid", (req, res) => {
  Controllers.postController.deleteComment(req, res);
});

module.exports = router;
