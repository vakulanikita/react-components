import React from "react";
import { Component } from "react";
import './item-add-form.css'

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
    console.log(this.state);
  }

  render() {
    return (
      <form className="item-add-form d-flex"
            onSubmit={this.onSubmit}>
        {/* Добавление value={this.state.label} сделало input controlled elem
            Также, когда React устанавливает value, это не приводит к onChange
            onChange() обновляет state, а state обновляет value */}
        <input type="text" className="form-control" 
              onChange={this.onLabelChange}
              placeholder="What needs to be done"
              value={this.state.label}/>
        <button
          className="btn btn-outline-secondary">
          Add Item
        </button>
      </form>
    )
  }
}
