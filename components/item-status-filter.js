import { Component } from 'react';
import {
  ButtonGroup,
  Button
} from '@chakra-ui/react'

export default class ItemStatusFilter extends Component {

  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' },
  ]
  
  render() {

    const { filter, onFilterChange } = this.props;

    const buttons = this.buttons.map(({name, label}) => {
      const isActive = filter === name;
      const clazz = isActive ? 'solid' : 'outline';
      return (
        <Button
          _focus={{
            boxShadow: '0'
          }}
          colorScheme="purple"
          variant={clazz}
          key={name}
          onClick={() => onFilterChange(name)}
        >
        {label}
        </Button>
      )
    })

    return (
      <ButtonGroup spacing={0}>
        { buttons }
      </ButtonGroup>
    );
  }
}