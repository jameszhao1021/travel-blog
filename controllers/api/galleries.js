const Gallery = require('../../models/gallery')

async function index(req, res) {
  try {
      // Populate the user field
      const galleries = await Gallery.find().populate('user');
      res.json(galleries);
  } catch (err) {
      res.status(400).json(err);
  }
}

async function create(req, res) {
  try {
      const gallery = await Gallery.create({
          country: req.body.country,
          preview: req.body.preview,
          text: req.body.text,
          user: req.user._id
      });
      res.json(gallery);
  } catch (err) {
      res.status(400).json(err);
  }
}


module.exports = {
  create,
  index
}