const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },

    userName: { type: DataTypes.STRING, allowNull: false, required: true },

    emailId: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      unique: true,
    },

    imageURL: { type: DataTypes.STRING, allowNull: true, required: false },

    password: { type: DataTypes.STRING, allowNull: false, required: true },
  },

  {
    sequelize: sequelizeInstance,
    modelName: "users",
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = User;
