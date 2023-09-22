const BlogPost = require('../models/BlogPost');

class BlogRespository {
  constructor(sequelize) {
    BlogPost(sequelize);
    this.client = sequelize;
    this.model = sequelize.models;
  }

  async createBlog(userInput) {
    const { title, description, UserId } = userInput;
    const blog = await this.model.BlogPost.create({
      title,
      description,
      UserId,
    });

    return blog;
  }
}

module.exports = BlogRespository;
