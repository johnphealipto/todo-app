import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos }) => {
  console.log(todos)
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo, index) => ( 
          <Todo 
            key={todo.id} 
            text={todo.text}
            index={index}
            todos={todos} 
            setTodos={setTodos}  />
        ))}
        <Todo />
      </ul>
    </div>
  )
}

export default TodoList;