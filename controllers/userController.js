const User = require("../models/User");
const Thought = require("../models/Thought");

module.exports = {
  async getUsers(req, res) {
    try {
      res.json(await User.find().populate("thoughts").populate("friends"));
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getUserById(req, res) {
    try {
      res.json(
        await User.findById(req.params.userId)
          .populate("thoughts")
          .populate("friends")
      );
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async createUser(req, res) {
    try {
      res.json(await User.create(req.body));
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async updateUser(req, res) {
    try {
      res.json(
        await User.findByIdAndUpdate(req.params.userId, req.body, { new: true })
      );
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async deleteUser(req, res) {
    try {
      const user = await User.findByIdAndDelete(req.params.userId);
      if (user) await Thought.deleteMany({ _id: { $in: user.thoughts } });
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async addFriend(req, res) {
    try {
      res.json(
        await User.findByIdAndUpdate(
          req.params.userId,
          { $addToSet: { friends: req.params.friendId } },
          { new: true }
        )
      );
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async removeFriend(req, res) {
    try {
      res.json(
        await User.findByIdAndUpdate(
          req.params.userId,
          { $pull: { friends: req.params.friendId } },
          { new: true }
        )
      );
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
