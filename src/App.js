import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'react-uuid';

class App extends Component {
  state={
    items:[],
    id:uuid(),
    item:'',
    isEdit:false
  }

  handleChange = (e) => {
    this.setState({
      item:e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id:this.state.id,
      title:this.state.item
    }

    const updateItem = [...this.state.items,newItem];

    this.setState({
      items:updateItem,
      id:uuid(),
      item:'',
      isEdit:false
    });
  }

  clearList = () => {
    this.setState({
      items:[]
    })
  }

  handleDelete = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items:filteredItems
    });
  }

  handleEdit = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    
    const editItem = this.state.items.find(item => item.id === id);
    
    this.setState({
      items:filteredItems,
      id:id,
      item:editItem.title,
      isEdit:true
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              isEdit={this.state.isEdit}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
