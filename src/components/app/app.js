import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {

  state = {
    todoData: [
      {label: 'Drink beer', important: false, done: false, id: 1 },
      {label: 'Eat meat', important: false, done: false, id: 2},
      {label: 'Watch TV', important: false, done: false, id: 3},
    ]
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((el) => el.id === id);//находим индекс элемента с заданным id
      const arrBegining = todoData.slice(0, index);//из массива todoData берем элементы с начала и до index
      const arrEnding = todoData.slice(index+1);//из массива todoData берем элементы с элемента (index+1) до конца

      const newArray = [...arrBegining, ...arrEnding];//через spread оператор объединяем полученные начало и конец нового массива, чтобы отрендерить его, не изменяя массив в state

      return {
        todoData: newArray
      };
    });
  };

  getNewId = () => this.state.todoData.length > 0 ? this.state.todoData.reduce((a,b) => a.id > b.id ? a : b).id + 1 : 1;//function to generate new ID > than the current Max ID

  addItem = (text) => {
    const newItem = {
        label: text ? text : this.getNewId(),
        important: false,
        done: false,
        id: this.getNewId()
    }
    console.log(`new ID is: ${newItem.id}`)
    this.setState(({ todoData }) => {
      const newArr = [ ...todoData, newItem];

      return {
        todoData: newArr
      };
    })
  };

  toggleProperty(arr, id, propName) {
    const index = arr.findIndex((el) => el.id === id);//находим индекс элемента с заданным id
    const oldItem = arr[index];
    const newItem = {...oldItem, [propName]: !oldItem[propName]}//в объект newItem через spread копируем все значения из oldItem, но перезаписываем propName на противоположное

    const newArr = [...arr];
    newArr[index] = newItem;
    return newArr;
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return{
        todoData: this.toggleProperty(todoData, id, 'important')
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return{
        todoData: this.toggleProperty(todoData, id, 'done')
      };
    });
  };

  render() {
    const {todoData} = this.state;
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader notDone={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={todoData} onDeleted={this.deleteItem} onToggleImportant={this.onToggleImportant} onToggleDone={this.onToggleDone}/>
        <ItemAddForm onAdded={this.addItem}/>
      </div>
    );
  };

}
