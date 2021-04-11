import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {

  const elements = todos.map((item) => {

    const {id, ...itemProps} = item; {/*через деструктурирзацию получаем значение id из item и в качестве rest параметра оставшиеся значения передаем в itemProps*/}

    return(
      <li key={id} className='list-group-item'>
        {/*<TodoListItem
          label={item.label}
          important={item.important}/>*/}
          <TodoListItem { ...itemProps }
                        onDeleted={() => {onDeleted(id)}}
                        onToggleImportant={() => onToggleImportant(id)}
                        onToggleDone={() => onToggleDone(id)}
          />
          {/*Spread оператор для объектов. Взять каждое свойство объекта item в качестве атрибута и передать его вместе со значением в объект TodoListItem*/}
      </li>
    );
  });

  return (
    <ul className='list-group todo-list'>
      {elements}
    </ul>
  )
}

export default TodoList;
