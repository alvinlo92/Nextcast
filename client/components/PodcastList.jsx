import React, { Component } from 'react';

class PodcastList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPlayer: false,
    };

    this.handleShowPlayer = this.handleShowPlayer.bind(this);
  }

  handleShowPlayer() {
    const { showPlayer } = this.state;
    if (showPlayer) {
      this.setState({ showPlayer: false });
    } else {
      this.setState({ showPlayer: true });
    }
  }

  render() {
    const { showPlayer } = this.state;
    const { episode } = this.props;
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
  }
}

export default PodcastList;
