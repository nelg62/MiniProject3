"use strict";

const Models = require("../models");

// Create a new like
const createLike = (req, res) => {
  Models.Like.create(req.body)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Get all likes for a specific post
const getAllLikesOnPost = (req, res) => {
  Models.Like.findAll({ where: { postid: req.params.postid } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Get all likes for a specific comment
const getAllLikesOnComment = (req, res) => {
  Models.Like.findAll({ where: { commentid: req.params.commentid } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Delete a like by its ID
const deleteLike = (req, res) => {
  Models.Like.destroy({ where: { id: req.params.likeid } })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Delete all likes for a specific post
const deleteAllLikesOnPost = (req, res) => {
  Models.Like.destroy({ where: { postid: req.params.postid } })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Delete all likes for a specific comment
const deleteAllLikesOnComment = (req, res) => {
  Models.Like.destroy({ where: { commentid: req.params.commentid } })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Toggle like on a post
const toggleLike = async (req, res) => {
  try {
    const { userId, postId } = req.body;
    const existingLike = await Models.Like.findOne({
      where: { userId, postId },
    });

    if (existingLike) {
      // If the like already exists, delete it
      await Models.Like.destroy({ where: { id: existingLike.id } });
      const updatedLikes = await Models.Like.findAll({ where: { postId } });
      res.send({ result: 200, data: updatedLikes });
    } else {
      // If the like doesn't exist, create a new one
      await Models.Like.create({ userId, postId });
      const updatedLikes = await Models.Like.findAll({ where: { postId } });
      res.send({ result: 200, data: updatedLikes });
    }
  } catch (err) {
    console.log(err);
    res.send({ result: 500, error: err.message });
  }
};

module.exports = {
  toggleLike,
  createLike,
  getAllLikesOnPost,
  getAllLikesOnComment,
  deleteLike,
  deleteAllLikesOnPost,
  deleteAllLikesOnComment,
};
