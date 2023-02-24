import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList';

const Todo = () => {
	const [todos, setTodos] = useState([]);

	const addTodo = (todo) => {
		const newTodos = [todo, ...todos];
		setTodos(newTodos);
	}
	const updateTodo = (todoId, newValue) => {
		setTodos((prev) => prev.map((item) => (item.id === todoId ? newValue : item)));
	}
	const removeTodo = (id) => {
		const removeArr=[...todos].filter((todo)=>todo.id !==id)
		setTodos(removeArr);
	};
	const completeTodo = (id) => {
		let updateTodos = todos.map((todo)=>{
			if(todo.id === id){
				todo.isCompleted = !todo.isCompleted;
			}
			return todo;
		})
		setTodos(updateTodos);
	}

  return (
	 <div>
		<h1 className="header">Add your to do list here</h1>
		<TodoForm 
			onSubmit={addTodo}
		/>
		<TodoList 
			todos={todos} 
			updateTodo={updateTodo} 
			removeTodo={removeTodo} 
			completeTodo={completeTodo}
		/>
	 </div>
  )
}

export default Todo