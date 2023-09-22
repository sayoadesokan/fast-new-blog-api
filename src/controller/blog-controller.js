const BlogService = require('../service/blog-service');

const service = new BlogService();
module.exports.createBlog = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { title, description } = req.body;
    const blog = await service.createBlog({
      title,
      description,
      UserId: id,
    });
    res.status(200).json({
      message: 'Success!',
      data: blog,
    });
  } catch (error) {
    console.log(error);
    throw new Error('Error creating blog');
  }
};
