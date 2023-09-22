const { DataTypes } = require('sequelize');
const ContactInfo = require('./ContactInfo');
const User = require('./User');
const BlogPost = require('./BlogPost');

module.exports.associations = (sequelize) => {
  const user = User(sequelize);
  const contactInfo = ContactInfo(sequelize);
  const blogpost = BlogPost(sequelize);

  //one-t0-one => hasOne, belongsTo
  user.hasOne(contactInfo, {
    foriegnKey: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  });
  contactInfo.belongsTo(user);

  //one-t0-many => hasOne, belongsTo
  user.hasMany(blogpost, {
    foriegnKey: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    UserId,
  });
  blogpost.belongsTo(user);

  //many-to-many => belongsToMany
  user.belongsToMany(user, {
    as: 'User',
    foriegnKey: 'UserId',
    through: 'Follow',
  });

  user.belongsToMany(user, {
    as: 'Followed',
    foriegnKey: 'FollowedId',
    through: 'Follow',
  });
};
