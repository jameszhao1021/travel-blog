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
      console.log('see what will be added: ', req.body)
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




// async function show(req, res) {
//   try {
//     const galleryDetail = await Gallery.findOne({_id: req.params.id, user: req.user._id});
//     if (!galleryDetail) {
//       return res.status(404).json({error: 'Gallery not found'});
//     }
//     res.json(galleryDetail);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// }

module.exports = {
  create,
  index,
  // show
}