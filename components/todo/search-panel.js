import React from 'react';
import { Component } from 'react';

export default class SearchPanel extends Component {

  state = {
    term: '',
  }

  render() {

    const onChange = (e) => {
      const term = e.target.value;
      this.setState({ term })
      // вызов функции в App.js
      this.props.onSearchChange(term);
    }

    return (
      <>
        <input type="text"
          className="form-control search-input"
          placeholder="type to search"
          onChange={onChange}
          value={this.state.term}/>
        <style jsx>{`
          .search-input {
            width: auto;
            flex-grow: 1;
            margin-right: 3px;
          }
        `}</style>
      </>
    )
  }
};