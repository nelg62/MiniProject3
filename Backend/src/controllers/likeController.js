"use strict";

const Models = require("../models");

const createLikeOnPost = (req, res) => {
  Models.Like.create({...req.body,postid: req.params.postid, })
    .then((data) => {res.send({ result: 200, data: data }); })
    .catch((err) => {console.log(err); res.send({ result: 500, error: err.message }); });
};

const createLikeOnComment = (req, res) => {
  Models.Like.create({...req.body,commentid: req.params.commentid, })
    .then((data) => {res.send({ result: 200, data: data }); })
    .catch((err) => {console.log(err); res.send({ result: 500, error: err.message }); });
};

const getAllLikesOnPost = (req, res) => {
  Models.Like.findAll({where: { postid: req.params.postid }, })
    .then((data) => {res.send({ result: 200, data: data }); })
    .catch((err) => {console.log(err); res.send({ result: 500, error: err.message }); });
};

const getAllLikesOnComment = (req, res) => {
  Models.Like.findAll({where: { commentid: req.params.commentid }, })
    .then((data) => {res.send({ result: 200, data: data }); })
    .catch((err) => {console.log(err); res.send({ result: 500, error: err.message }); });
};

const deleteLike = (req, res) => {
  Models.Like.destroy({ where: { id: req.params.likeid } })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {console.log(err); res.send({ result: 500, error: err.message }); });
};

const deleteAllLikesOnPost = (req, res) => {
  Models.Like.destroy({ where: { postid: req.params.postid }})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {console.log(err); res.send({ result: 500, error: err.message }); });
};

const deleteAllLikesOnComment = (req, res) => {
  Models.Like.destroy({ where: { commentid: req.params.commentid }})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {console.log(err); res.send({ result: 500, error: err.message }); });
};

module.exports = {
  createLikeOnPost,
  createLikeOnComment,
  getAllLikesOnPost,
  getAllLikesOnComment,
  deleteLike,
  deleteAllLikesOnPost,
  deleteAllLikesOnComment,
};
