module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      displayName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: DataTypes.STRING,
    },
    {
      tableName: "users",
      timestamps: false,
      underscored: true,
    }
  );
  User.associate = (models) => {
    User.hasMany(models.BlogPost, {
      foreignKey: "userId",
      as: "user",
    });
  };

  return User;
};