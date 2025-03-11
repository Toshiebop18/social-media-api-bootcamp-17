const Thought = require("../models/Thought");
const User = require("../models/User");

module.exports = {
  async getThoughts(req, res) {
    res.json(await Thought.find());
  },
  async getThoughtById(req, res) {
    res.json(await Thought.findById(req.params.thoughtId));
  },
  async createThought(req, res) {
    const thought = await Thought.create(req.body);
    await User.findByIdAndUpdate(req.body.userId, {
      $push: { thoughts: thought._id },
    });
    res.json(thought);
  },
  async updateThought(req, res) {
    res.json(
      await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, {
        new: true,
      })
    );
  },
  async deleteThought(req, res) {
    res.json(await Thought.findByIdAndDelete(req.params.thoughtId));
  },
  async addReaction(req, res) {
    res.json(
      await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        { $push: { reactions: req.body } },
        { new: true }
      )
    );
  },
  async removeReaction(req, res) {
    res.json(
      await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { new: true }
      )
    );
  },
};
