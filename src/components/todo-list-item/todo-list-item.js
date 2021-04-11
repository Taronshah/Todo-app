import React from 'react';

import './todo-list-item.css';

class TodoListItem extends React.Component {

  /*constructor() {
    super();
    this.state = {
      done: false
    };
  }*/

  /*constructor() {
    super();
    this.onLableClick = () => {
      console.log(`Yo ${this.props.label}`);
    };
  }*/

  /*state = {
    done: false,
    important: false
  };*/

  /*onLableClick = () => {
    this.setState((state) => {
      return {
        done: !state.done
      };
    });
  };

  onMarkImportant = () => {
    this.setState(({important}) => {//Деструктуризация State для выцепления лишь important
      return {
        important: !important
      };
    });
  };*/

  render() {
    const { label, onDeleted, onToggleImportant, onToggleDone, done, important } = this.props;
    //const { done, important } = this.state;

    let classNames = "todo-list-item";
    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important'
    }

    /*const style = {
      color: important ? 'tomato' : 'steelblue',
      fontWeight: important ? 'bold' : 'normal'
    };*/

    return (
      <span className={classNames}>

        <span
          className="todo-list-item-label"
          /*style={style}*/
          onClick={onToggleDone}
          >
          {label}
        </span>

        <button type="button"
                className={`btn btn-outline-${done ? 'danger' : 'secondary'} btn-sm float-right`}
                onClick={onDeleted}
                >
          <i className="fa fa-trash-o" />
        </button>

        <button type="button"
                className={important ? "btn btn-outline-success btn-sm float-right" : "btn btn-outline-warning btn-sm float-right"}
                onClick={onToggleImportant}
                >
          <i className={important ? "fa fa-angle-double-down" : "fa fa-exclamation"} />
        </button>

      </span>
    );
  }
}

// const TodoListItem = (props) => {
//   return <span>{props.label}</span>
// }

/*const TodoListItem = ({label, important = false}) => {

  const style = {
    color: important ? 'tomato' : 'steelblue',
    fontWeight: important ? 'bold' : 'normal'
  }

  return (
    <span className="todo-list-item">
      <span
        className="todo-list-item-label"
        style={style}>
        {label}
      </span>
        <button type="button"
                className="btn btn-outline-secondary btn-sm float-right">
          <i className="fa fa-trash-o" />
        </button>

        <button type="button"
                className={important ? "btn btn-outline-success btn-sm float-right" : "btn btn-outline-warning btn-sm float-right"}>
          <i className={important ? "fa fa-arrow-down" : "fa fa-exclamation"} />
        </button>
    </span>
  );
};*/

export default TodoListItem;
