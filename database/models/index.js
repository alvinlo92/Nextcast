const mongoose = require('mongoose');

const podcastSchema = mongoose.Schema({
  title: String,
  artist: String,
  url: String,
});

const Podcast = mongoose.model('Poscast', podcastSchema);

module.exports = Podcast;
