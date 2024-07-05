"use strict";
const Post = require("./post");
const Comment = require("./comment");
const Like = require("./like");
const User = require("./user");

async function init() {
  await Post.sync();
  await Comment.sync();
  await Like.sync();
  await User.sync();
}

init();

module.exports = {
  Post,
  Comment,
  Like,
  User,
};
