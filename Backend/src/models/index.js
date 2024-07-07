"use strict";
const Post = require("./post");
const Comment = require("./comment");
const Like = require("./like");
const User = require("./user");

async function init() {
  // Synchronize all models with the database
  await Post.sync();
  await Comment.sync();
  await Like.sync();
  await User.sync();

  // Define foreignkeys for Users and Posts
  User.hasMany(Post, { foreignKey: "userid" });
  Post.belongsTo(User, { foreignKey: "userid" });

  // Define foreignkeys for posts and comments
  Post.hasMany(Comment, { foreignKey: "postid" });
  Comment.belongsTo(Post, { foreignKey: "postid" });

  // Define foreignkeys for comments and users
  Comment.belongsTo(User, { foreignKey: "userid" });
}

init();

module.exports = {
  Post,
  Comment,
  Like,
  User,
};
