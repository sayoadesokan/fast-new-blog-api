const BlogPost = require("../models/BlogPost");

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

  async likeBlogPost({ postId, userId }) {
    const blogPost = await this.model.BlogPost.findByPk(postId);
    if (blogPost.likedBy.has(userId)) {
      // Handle the case where the user has already liked the post
      blogPost.likes -= 1;
      const tempSet = blogPost.likedBy;
      tempSet.delete(userId); // Remove the user from the set
      blogPost.set("likedBy", tempSet); // Update the 'likedBy' attribute
      console.log("undeleted?", blogPost.likedBy);
      await blogPost.save();
      return blogPost;
    }
    blogPost.likes += 1;
    blogPost.set("likedBy", blogPost.likedBy.add(userId)); // Update the 'likedBy' attribute
    await blogPost.save();
    return blogPost;
  }
}

module.exports = BlogRespository;
