const Blog = require('../../models/blog');

async function blogSearch(req, res) {
    try {
      const searchTerm = req.query.searchTerm;
       console.log('searchTerm', req.query.searchTerm);
      const results = await Blog.find({
        $or: [
          { title: new RegExp(searchTerm, 'i') },
          { country: new RegExp(searchTerm, 'i') },
          { text: new RegExp(searchTerm, 'i') },
          { continent: new RegExp(searchTerm, 'i') },
          { "comments.text": new RegExp(searchTerm, 'i') }, 
          { "comments.username": new RegExp(searchTerm, 'i') } 
        ]
      });
      
      res.json(results);
    } catch (error) {
        console.log(error);
      res.status(500).send(error.toString());
    }
  };
  
  module.exports = {
    blogSearch
}