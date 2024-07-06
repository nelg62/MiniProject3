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

  User.hasMany(Post, { foreignKey: "userid" });
  Post.belongsTo(User, { foreignKey: "userid" });

  Post.hasMany(Comment, { foreignKey: "postid" });
  Comment.belongsTo(Post, { foreignKey: "postid" });

  Comment.belongsTo(User, { foreignKey: "userid" });
}

init();

module.exports = {
  Post,
  Comment,
  Like,
  User,
};
