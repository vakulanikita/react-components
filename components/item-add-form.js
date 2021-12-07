import {
  Input,
  Button,
  Flex,
  Box
} from '@chakra-ui/react'
import { Component } from "react";

export default class ItemAddForm extends Component {

  state = {
    label: ''
  };

  onLabelChange = (e) => {
    // state не зависит от предыдущего state
    // поэтому меняю напрямую
    this.setState({
      label: e.target.value
      // label: e.target.value.toUpperCase()
    });
    
  };

  onSubmit = (e) => {
    // preventDefault() отменяет перезагрузку страницы по умолчанию
    // при отправке формы
    e.preventDefault();
    this.props.onItemAdded(this.state.label)
    this.setState({
      label: ''
    })
  }

  render() {
    return (
      <Box mt="15px">
        <form onSubmit={this.onSubmit}>
          {/* Добавление value={this.state.label} сделало input controlled elem
              Также, когда React устанавливает value, это не приводит к onChange
              onChange() обновляет state, а state обновляет value */}
          <Flex>
            <Input
              className="form-control" 
              type="text"
              bg="white"
              w="auto"
              flexGrow="1"
              mr="1"
              onChange={this.onLabelChange}
              placeholder="What needs to be done"
              value={this.state.label}
            />
            <Button
              type="submit"
              className="btn btn-outline-secondary"
              colorScheme="purple"
              variant="outline"
            >
              Add Item
            </Button>
          </Flex>
        </form>
      </Box>
    )
  }
}
