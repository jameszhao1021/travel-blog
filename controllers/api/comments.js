const Blog = require('../../models/blog');



  
  async function addComment(req, res)  {
    // console.log(req.body);
    // console.log(req.params);
    try {
      const blog = await Blog.findById(req.params.id);
      
      req.body.user = req.user._id;
      req.body.userName = req.user.name;
    //   console.log(req.body.userName);
    
    
    
      if (!blog) {
        return res.status(404).json({ message: 'Blog not found' });
      }
  
     const newComment = req.body;

      blog.comments.push(newComment);
      
      await blog.save();
    //   console.log(blog);
     
      res.status(201).json(newComment);
    } catch (error) {
      console.error('Error creating comment:', error);
      res.status(500).json({ message: 'Server error' });
    }
}
  

  
  
  
  module.exports = {
    addComment
  }
  
  