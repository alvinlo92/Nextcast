import React, { Component } from 'react';

class PodcastPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <button type="button">Back</button>
        <button type="button">Play</button>
        <button type="button">Forward</button>
      </div>
    );
  }
}

export default PodcastPlayer;
