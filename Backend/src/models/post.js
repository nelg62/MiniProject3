const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    content_text: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    content_imageURL: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
    like_count: {
      type: DataTypes.INTEGER,
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "posts",
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Post;
