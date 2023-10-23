const e = require("express");
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
    const currentUser = await this.model.User.findByPk(userId);
    const existingLike = await this.model.Likes.findOne({
      where: {
        UserId: userId,
        BlogPostId: postId,
      },
    });

    if (existingLike) {
      // User has already liked the post, handle unlike
      await currentUser.removeLiked(blogPost);
      blogPost.likes -= 1;
      await blogPost.save();
    } else {
      await currentUser.addLiked(blogPost);
      blogPost.likes += 1;
      await blogPost.save();
    }
  }
}

module.exports = BlogRespository;
