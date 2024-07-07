"use strict";

const Models = require("../models");

// Get all posts
const getPosts = (req, res) => {
  Models.Post.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Create a new post
const createPost = (req, res) => {
  Models.Post.create(req.body)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Update an existing post
const updatePost = (req, res) => {
  Models.Post.update(req.body, {
    where: { id: req.params.postid },
    returning: true,
    plain: true,
  })
    .then(async (result) => {
      const affectedRows = result[1];
      if (affectedRows === 1) {
        const updatedPost = await Models.Post.findByPk(req.params.postid);
        res.send({ result: 200, data: updatedPost });
      } else {
        res.send({ result: 404, error: "Post not found" });
      }
    })
    .catch((err) => {
      console.log("Error updating post:", err);
      res.send({ result: 500, error: err.message });
    });
};

// Delete a post
const deletePost = (req, res) => {
  Models.Post.destroy({ where: { id: req.params.postid } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Get all comments for a specific post
const getCommentsOnPost = (req, res) => {
  Models.Comment.findAll({
    where: { postid: req.params.postid },
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Create a new comment on a specific post
function createComment(req, res) {
  Models.Comment.create({
    ...req.body,
    postid: req.params.postid,
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
}

// Update an existing comment
const updateComment = (req, res) => {
  Models.Comment.update(req.body, {
    where: { id: req.params.commentid },
    returning: true,
  })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Delete a comment
const deleteComment = (req, res) => {
  Models.Comment.destroy({ where: { id: req.params.commentid } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getPosts,
  createPost,
  createComment,
  getCommentsOnPost,
  updatePost,
  deletePost,
  updateComment,
  deleteComment,
};
