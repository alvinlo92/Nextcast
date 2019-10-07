import React, { Component } from 'react';
import styled from 'styled-components';

class PodcastPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <button >Back</button>
        <button >Play</button>
        <button >Forward</button>
      </div>
    )
  }
}

export default PodcastPlayer;