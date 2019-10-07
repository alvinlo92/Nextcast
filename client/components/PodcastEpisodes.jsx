import React, { Component } from 'react';

class PodcastEpisodes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPlayer: false,
    };

    this.handleShowPlayer = this.handleShowPlayer.bind(this);
  }

  handleShowPlayer() {
    if (this.state.showPlayer) {
      this.setState({ showPlayer: false });
    } else {
      this.setState({ showPlayer: true });
    }
  }

  render() {
    const { episode } = this.props;
    return (
      <div>
        <div>Title</div>
        <div>{episode.title}</div>
        <div>{episode.content}</div>
        {this.state.showPlayer ? <button onClick={this.handleShowPlayer}>Stop Playing</button> : <button onClick={this.handleShowPlayer}>Play Episode</button>}
        {this.state.showPlayer && <div>
          <video controls>
            <source src={episode.enclosure.url}></source>
          </video>
        </div>}
        <br/>
      </div>
    )
  }
}

export default PodcastEpisodes;
