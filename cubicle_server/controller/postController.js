const message = require('../models/post');

class App {
  getAll = async (req, res) => {
    try {
      const posts = await post.find();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };
  createPost = async (req, res) => {
    const postLoader = new message({
      user: req.body.user,
      data: req.body.data,
      tags: req.body.tags,
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
const testingApp = new App();
module.exports = testingApp;
