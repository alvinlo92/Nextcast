/* eslint-disable no-console */
const path = require('path');
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const axios = require('axios');
const { Parser } = require('xml2js');

const { parseString } = new Parser({ explicitArray: false });

const app = express();
const port = 3001;

app.use(cors());
app.use(compression());
app.use(express.static('public'));

app.get('/api/search/:searchTerm', (req, res) => {
  const { searchTerm } = req.params;
  axios.get(`https://itunes.apple.com/search?term=${searchTerm}&media=podcast`)
    .then((request) => res.send(request.data.results))
    .catch(console.error);
});

app.get('/api/top-charts', (req, res) => {
  axios.get('https://rss.itunes.apple.com/api/v1/us/podcasts/top-podcasts/all/100/explicit.json')
    .then((request) => res.send(request.data.feed.results))
    .catch(console.error);
});

app.get('/api/podcast/:id', (req, res) => {
  const { id } = req.params;
  axios.get(`https://itunes.apple.com/lookup?id=${id}`)
    .then((request) => res.send(request.data.results[0]))
    .catch(console.error);
});

app.get('/api/podcast/:id/rss', (req, res) => {
  const { url } = req.query;
  axios.get(url)
    .then((request) => parseString(request.data, (err, result) => res.send(result)))
    .catch(console.error);
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
