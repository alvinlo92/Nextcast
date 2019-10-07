const axios = require('axios');
const Parser = require('rss-parser');

const Podcast = require('../models/index.js');

const parser = new Parser();

exports.getSearchPodcast = (req, res) => {
  const { searchTerm } = req.params;

  axios.get(`https://itunes.apple.com/search?term=${searchTerm}&media=podcast`)
    .then((request) => {
      res.send(request.data.results);
    })
    .catch((error) => {
      console.log(error);
    });
};

exports.getPodcastMetaData = (req, res) => {
  const { url } = req.query;

  (async () => {
    const feed = await parser.parseURL(url);
    res.send(feed);
  })();
}

// find for gettting data

// new and save to post data
