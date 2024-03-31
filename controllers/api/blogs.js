const Blog = require('../../models/blog')
const countryContinentMapping = require('../../models/countryContinentMapping');

// async function index(req, res) {
//   try {
//     const blogs = await Blog.find({ user: req.user._id }).populate('user', 'name');
//     console.log(blogs);
//     res.json(blogs);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// }


async function index(req, res) {
  console.log(req.params.view)
  try {
    if (req.params.view == 'All Posts') {
    const blogs = await Blog.find({ user: req.user._id }).populate('user', 'name');
    res.json(blogs);
    } else {
      const blogs = await Blog.find({ user: req.user._id, view: req.params.view }).populate('user', 'name');

      res.json(blogs);
    }
  } catch (err) {
    res.status(400).json(err);
  }
}

async function publicIndex(req, res) {
  try {
    let query = {};
    if (req.params.continent !== 'All') {
      query.continent = req.params.continent;
      query.view = { $ne: 'Private Post' }; // Exclude 'Private Post' view
    } else {
      query.view = { $ne: 'Private Post' }; // Exclude 'Private Post' view
    }
    const blogs = await Blog.find(query);
    res.json(blogs);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function create(req, res) {
  try {
    console.log('see what will be added: ', req.body)
    const blog = await Blog.create({
      view: req.body.view,
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
    await Blog.deleteOne({ _id: req.params.id, user: req.user._id });
    res.json(true);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
}

async function update(req, res) {
  try {
    const mapping = await countryContinentMapping;
    const { country } = req.body;
    const continent = mapping[country];
    if (!continent) {
      throw new Error('Continent not found for the selected country');
    }
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, { ...req.body, continent }, { new: true })
    res.json(updatedBlog)
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
}


async function show(req, res) {
  try {
    const blog = await Blog.findOne({ _id: req.params.id });
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








