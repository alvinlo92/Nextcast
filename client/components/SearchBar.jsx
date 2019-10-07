import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let { searchTerm } = this.state;
    if (searchTerm !== '') {
      searchTerm = searchTerm.toLowerCase().split(' ').join('+');
      this.props.handleSearch(searchTerm);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='submit'
          value='🔍'
        />
        <input
          type='text'
          placeholder='Search'
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

export default SearchBar;