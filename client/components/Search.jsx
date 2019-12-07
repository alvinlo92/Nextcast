import React, { Component } from 'react';

class Search extends Component {
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
    const { handleSearch } = this.props;
    if (searchTerm !== '') {
      searchTerm = searchTerm.toLowerCase().split(' ').join('+');
      handleSearch(searchTerm);
    }
  }

  render() {
    const { searchTerm } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="submit"
          value="🔍"
        />
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default Search;
