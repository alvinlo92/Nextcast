const express = require('express');
const cors = require('cors');
const compression = require('compression');

const db = require('../database/index.js');
const controllers = require('../database/controllers/index.js');

const app = express();
const port = 3001;

app.use(cors());
app.use(compression());
app.use(express.static('public'));

app.get('/api/search/:searchTerm', controllers.getSearchPodcast);

app.get('/api/podcast/info', controllers.getPodcastMetaData);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
