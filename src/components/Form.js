import React from 'react';

const Form = ({ todos, setTodos, inputText, setInputText }) => {

  const handleSubmitTodo = (e) => {
    e.preventDefault()
    setTodos([
      ...todos, {
        text: inputText,
        completed: false,
        id: Math.random() * 1000
      }
    ])
    setInputText("");
  }

  return (
    <form>
      <input 
        type="text" 
        className="todo-input"
        value={inputText} 
        onChange={(e) => setInputText(e.target.value)} />
      <button className="todo-button" type="submit" onClick={handleSubmitTodo}>
        <i className="fas fa-plus-square" />
      </button>
      <div className="select"> 
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default Form;