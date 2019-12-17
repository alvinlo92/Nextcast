const axios = require('axios');
const { parseString } = require('xml2js');

const Podcast = require('../models/index.js');

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

exports.getPodcastFeed = (req, res) => {
  const { url } = req.query;

  axios.get(url)
    .then((request) => {
      parseString(request.data, (err, result) => {
        res.send(result);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
