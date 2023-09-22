const { sequelize } = require('../database/db');
const BlogRespository = require('../database/repository/blog-repository');

class BlogService {
  constructor() {
    this.repository = new BlogRespository(sequelize);
  }

  async createBlog(userInput) {
    try {
      const { title, description, UserId } = userInput;
      const blog = await this.repository.createBlog({
        title,
        description,
        UserId,
      });

      return blog;
    } catch (error) {
      console.log(error);
      throw new Error('Unable to create a blog!');
    }
  }
}

module.exports = BlogService;
