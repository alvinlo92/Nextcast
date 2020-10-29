import React from 'react';

const PodcastList = ({ episode }) => (
  <div>
    <div>Title</div>
    <div>{episode.title}</div>
    <div>{episode.description}</div>
      <div>
        <video controls>
          <source src={episode.enclosure.$.url} />
        </video>
      </div>
    <br />
  </div>
);

export default PodcastList;
