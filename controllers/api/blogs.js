const Blog = require('../../models/blog')
const countryContinentMapping = require('../../models/countryContinentMapping');

async function index(req, res) {
  try {
    const blogs = await Blog.find({ user: req.user._id });
    res.json(blogs);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function publicIndex(req, res) {
  try {
    if (req.params.continent == 'All') {
      const blogs = await Blog.find();
      res.json(blogs);
    } else {
      const blogs = await Blog.find({ continent: req.params.continent });
      res.json(blogs);
    }
  } catch (err) {
    res.status(400).json(err);
  }
}


async function create(req, res) {
  try {
    console.log('see what will be added: ', req.body)
    const blog = await Blog.create({
      country: req.body.country,
      preview: req.body.preview,
      title: req.body.title,
      text: req.body.text,
      user: req.user._id
    });
    res.json(blog);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function deleteBlog(req, res) {
  try {
    console.log(req.params.id)
    await Blog.deleteOne({ _id: req.params.id, user: req.user._id });
    res.json(true);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
}

async function update(req, res) {
  try {
    // console.log('test edit feature for id: ', req.params.id);
    // console.log('test edit feature for body: ', req.body);
    const mapping = await countryContinentMapping;
    const { country } = req.body;
    const continent = mapping[country];
    if (!continent) {
      throw new Error('Continent not found for the selected country');
    }
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, { ...req.body, continent }, { new: true })
    res.json(updatedBlog)
    console.log('see updated one: ' + updatedBlog)
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
}


async function show(req, res) {
  try {
    const blog = await Blog.findOne({ _id: req.params.id });
    console.log('see blog: '+ blog)
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.json(blog);
  } catch (err) {
    res.status(400).json(err);
  }
}


module.exports = {
  create,
  index,
  publicIndex,
  delete: deleteBlog,
  update,
  show
}








