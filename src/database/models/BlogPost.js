const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const BlogPost = sequelize.define(
    "BlogPost",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      likedBy: {
        type: DataTypes.ARRAY(DataTypes.UUID), // An array of UUIDs
        defaultValue: [],
        get() {
          return new Set(this.getDataValue("likedBy")); // Return the array as a Set
        },
        set(val) {
          this.setDataValue("likedBy", [...val]); // Store it as a Set
        },
      },
    },
    {
      timestamps: true,
    }
  );
  return BlogPost;
};
