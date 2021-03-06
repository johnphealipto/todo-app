import React from 'react';

const Todo = ({ text, index, todos, setTodos }) => {

  const handleDeleteTodo = () => {
    const newTodos = [...todos]
    if (index > -1) {
      newTodos.splice(index, 1);
    }
    setTodos(newTodos)
  }

  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button className="complete-btn">
        <i className="fas fa-check" />
      </button>
      <button className="trash-btn" onClick={handleDeleteTodo}>
        <i className="fas fa-trash" />
      </button>
    </div>
  )
}

export default Todo;