import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props)
      this.state = {
        term: ""
      }
  }

  handleOnChange = (event) => {
    this.setState({
      term: event.target.value
    })
    this.props.onSearchChange(this.state.term)
  }


  render() {
    return (
      <div className="search-bar">
          <input
            id="search-term"
            placeholder="Search"
            value={this.state.term}
            onChange={this.handleOnChange}
          />
      </div>
    )

  }
}

export default SearchBar;
