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

async function deleteComment(req, res) {
    try {
       
        const blog = await Blog.findOne({ 'comments._id': req.params.id, 'comments.user': req.user._id });
        // console.log(blog);  
        if (!blog) {
            return res.status(404).json({error: 'Comment not found'});
        }
        const comment = blog.comments.id(req.params.id);
        if (!comment) {
            return res.status(404).send({ message: 'Comment not found' });
          }
        if (comment.user.toString() !== req.user._id.toString()) {
            return res.status(403).send({ message: 'User not authorized to edit this comment' });
          }
       blog.comments.remove(req.params.id);
        await blog.save();
        res.json({message: 'Comment successfully deleted', id: req.params.id});
    } catch(err) {
        console.log(err);
        res.status(400).json({error: err.message});
    }
}

async function updateComment(req,res) {
    const userId = req.user._id; 
    const commentId = req.params.id;
    // console.log(commentId);
    // // console.log(req.params);

    try {
        const blog = await Blog.findOne({ 'comments._id': commentId, 'comments.user': userId });
        if (!blog) {
          return res.status(404).send({ message: 'Blog post not found' });
        }
        const comment = blog.comments.id(commentId);
        if (!comment) {
            return res.status(404).send({ message: 'Comment not found' });
          }
        if (comment.user.toString() !== userId.toString()) {
            return res.status(403).send({ message: 'User not authorized to edit this comment' });
          }
        comment.text = req.body.text; 
        await blog.save();
        console.log(comment);
        res.status(201).json(comment);
 } catch (error) {
    console.error('Error updating comment:', error);
    res.status(500).send({ message: 'Failed to update comment' });
  }
}
  
  module.exports = {
    addComment,
    delete: deleteComment,
    update: updateComment
  }
  
  