const posts = require('../models/Posts/post');

class App {
  getAll = async (req, res) => {
    try {
      const post = await posts.find();
      res.json(post);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };
  createPost = async (req, res) => {
    const postLoader = new posts({
      user: req.body.user,
      type: req.body.type,
      tags: req.body.tags,
      description: req.body.description,
      media: req.body.tags,
      created_at: req.body.created_at,
    });
    try {
      const newPost = await postLoader.save();
      res.status(201).json(newPost);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
}
const PostController = new App();
module.exports = PostController;
