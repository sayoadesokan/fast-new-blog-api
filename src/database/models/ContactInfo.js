const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ContactInfo = sequelize.define(
    'ContactInfo',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: true,
    }
  );
  return ContactInfo;
};
