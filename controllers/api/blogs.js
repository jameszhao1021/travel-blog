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

<<<<<<< HEAD
async function show(req, res) {
  try {
    const blog = await Blog.findOne({_id: req.params.id, user: req.user._id});
    if (!blog) {
      return res.status(404).json({error: 'Blog not found'});
    }
    res.json(blog);
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = {
  create,
  index,
  show
}

=======
module.exports = {
  index,
  create,
};
>>>>>>> 57fb59a3a9da55279aaac8c7a8fb8c3fbc5e672f

















module.exports = {
  index,
  create,
  
  };