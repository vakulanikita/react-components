import { Component } from 'react';
import { Input } from '@chakra-ui/react'

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
      <Input 
        flexGrow="1"
        mr="1"
        w="auto"
        bg="white"
        type="text"
        placeholder="type to search"
        onChange={onChange}
        value={this.state.term}
      />
    )
  }
};