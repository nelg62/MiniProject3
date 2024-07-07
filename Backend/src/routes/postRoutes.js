const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// Route to get all posts
router.get("/", (req, res) => {
  Controllers.postController.getPosts(req, res);
});

// Route to create a new post
router.post("/create", (req, res) => {
  Controllers.postController.createPost(req, res);
});

// Route to update an existing post
router.put("/:postid", (req, res) => {
  Controllers.postController.updatePost(req, res);
});

// Route to delete a post
router.delete("/:postid", (req, res) => {
  Controllers.postController.deletePost(req, res);
});

// Route to get all comments for a specific post
router.get("/:postid/comments", (req, res) => {
  Controllers.postController.getCommentsOnPost(req, res);
});

// Route to create a new comment on a specific post
router.post("/:postid/comments", (req, res) => {
  Controllers.postController.createComment(req, res);
});

// Route to update an existing comment on a specific post
router.put("/:postid/:commentid", (req, res) => {
  Controllers.postController.updateComment(req, res);
});

// Route to delete a comment on a specific post
router.delete("/:postid/:commentid", (req, res) => {
  Controllers.postController.deleteComment(req, res);
});

module.exports = router;
