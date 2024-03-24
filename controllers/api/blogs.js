const Blog = require('../../models/blog')


async function index(req, res) {
  try {
      const blogs = await Blog.find({user: req.user._id});
      res.json(blogs);
  } catch (err) {
      res.status(400).json(err);
  }
}


async function create(req, res) {
  try {
    console.log('see what will be added: ', req.body)
      const blog = await Blog.create({
          country : req.body.country,
          preview : req.body.preview,
          title : req.body.title,
          text: req.body.text,
          user: req.user._id
      });
      res.json(blog);
  } catch (err) {
      res.status(400).json(err);
  }
}

module.exports = {
  index,
  create,
};

















module.exports = {
  index,
  create,
  
  };