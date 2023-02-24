import React, { useState } from 'react';
import { GrEdit } from 'react-icons/gr';
import { RiDeleteBin5Fill } from 'react-icons/ri'
import TodoForm from './TodoForm';

const TodoList = ({ todos, updateTodo, removeTodo, completeTodo }) => {
	const [edit, setEdit] = useState({
		id: null,
		value: "",
	})
	const submitUpdate=(value)=> {
		updateTodo(edit.id, value);
		setEdit({
			id: null,
			value: '',
		});
	}
	if(edit.id){
		return <TodoForm edit={edit} onSubmit={submitUpdate} />
	}
  return (
	 <div>
		{todos.map((todo, index) => (
			<>
				<div 
					className={todo.isCompleted ? 'todo-complete' : 'todo-container'}
					key={index}
				>
					<div key={todo.id} onClick={ () => completeTodo(todo.id) }>{todo.text}</div>
				
					<div className="icons">
						<RiDeleteBin5Fill 
							onClick={ () => removeTodo(todo.id) } className="icon_delete"
						/>
						<GrEdit
							onClick={ () => setEdit({id:todo.id, value:todo.text}) } className="icon_edit"
						/>
					</div>
				</div>
			</>
		))}
	 </div>
  )
}

export default TodoList