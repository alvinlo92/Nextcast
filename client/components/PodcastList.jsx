import React from 'react';

const PodcastList = () => {
  return (
    <div>
      <div>Title</div>
      <div>{episode.title}</div>
      <div>{episode.description[0]}</div>
      {showPlayer ? <button type="button" onClick={this.handleShowPlayer}>Stop Playing</button> : <button type="button" onClick={this.handleShowPlayer}>Play Episode</button>}
      {showPlayer && (
        <div>
          <video controls>
            <source src={episode.enclosure.url} />
          </video>
        </div>
      )}
      <br />
    </div>
  );
};

export default PodcastList;
