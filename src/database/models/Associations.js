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
    foreignKey: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  });
  contactInfo.belongsTo(user);

  //one-t0-many => hasOne, belongsTo
  user.hasMany(blogpost, {
    foreignKey: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  });
  blogpost.belongsTo(user);

  //many-to-many => belongsToMany
  user.belongsToMany(user, {
    as: 'User',
    foreignKey: 'UserId',
    through: 'Follow',
  });

  user.belongsToMany(user, {
    as: 'Followed',
    foreignKey: 'FollowedId',
    through: 'Follow',
  });
  
  blogpost.belongsToMany(user, {
      through: 'Likes',
      as: 'LikedBy',
      foreignKey: 'BlogPostId',
    });
    
    user.belongsToMany(blogpost, {
        through: 'Likes',
        as: 'Liked',
        foreignKey: 'UserId',
    });
};


