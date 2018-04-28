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
  }


  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={this.handleOnChange}
        />
      </div>
    )

  }
}

export default SearchBar;
