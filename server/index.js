const express = require('express');
const path = require('path');
const cors = require('cors');
const compression = require('compression');

const controllers = require('../database/controllers/index.js');

const app = express();
const port = 3001;

app.use(cors());
app.use(compression());
app.use(express.static('public'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/api/search/:searchTerm', controllers.getSearchPodcast);

app.get('/api/topcharts', controllers.getTopCharts);

app.get('/api/podcast/feed', controllers.getPodcastFeed);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
