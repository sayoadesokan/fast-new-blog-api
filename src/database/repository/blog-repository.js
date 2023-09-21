const BlogPost = require('../models/BlogPost');

class BlogRespository {
  constructor() {
    BlogPost(sequelize);
    this.client = sequelize;
    this.model = sequelize.models;
  }

  async createBlog(userInput) {
    const { title, description } = userInput;
    const blog = await this.model.BlogPost.create({
      title,
      description,
    });

    return blog;
  }
}

module.exports = BlogRespository;
