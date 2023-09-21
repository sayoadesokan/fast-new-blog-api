const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'John',
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'Doe',
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      salt: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
  User.hasOne(models.ContactInfo, {
    foriegnKey: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  });

  User.hasMany(models.BlogPost, {
    foriegnKey: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  });
  return User;
};
