import bcrypt from "bcrypt";
import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "../config/connection";

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  checkPassword(loginPw: string) {
    return bcrypt.compareSync(loginPw, this.password);
  }

  declare id: CreationOptional<number>;

  declare username: string;

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
          // eslint-disable-next-line no-param-reassign
          newUserData.password = await bcrypt.hash(newUserData.password, 10);
        } catch (err) {
          // eslint-disable-next-line no-console
          console.error(err);
        }
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: "user",
  },
);

export default User;
