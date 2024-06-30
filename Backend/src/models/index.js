"use strict";
const Post = require("./post");
const Comment = require("./comment");

async function init() {
  await Post.sync();
  await Comment.sync();
}

init();

module.exports = {
  Post,
  Comment,
};
