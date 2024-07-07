const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Like extends Model {}

Like.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },

    userId: { type: DataTypes.STRING, allowNull: false, required: true },

    postId: { type: DataTypes.STRING, allowNull: true, required: false },

    commentId: { type: DataTypes.STRING, allowNull: true, required: false },
  },

  {
    sequelize: sequelizeInstance,
    modelName: "likes",
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = Like;
