import bcrypt from "bcrypt";
import { DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "../config/connection";

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  checkPassword(loginPw: string) {
    return bcrypt.compareSync(loginPw, this.password);
  }
  declare id: number;
  declare username: string;
  declare email: string;
  declare password: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6, 126],
      },
    },
  },
  {
    hooks: {
      async beforeCreate(newUserData) {
        try {
          newUserData.password = await bcrypt.hash(newUserData.password, 10);
        } catch (err) {
          console.error(err);
        }
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  },
);

export default User;
