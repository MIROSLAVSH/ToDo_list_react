import React, { useRef, useState } from 'react'

const TodoForm = (props) => {
	const [input, setInput] = useState(props.edit ? props.edit.value:'');
	const inputRef = useRef(null)

	const handleChange = (e) =>{
		setInput(e.target.value);
	}

	const handleSubmit = (e) =>{
		e.preventDefault();
		props.onSubmit({
			id:Math.floor(Math.random()*10000),
			text:input
		})
	}
  return (
	 <form className="todo_form">
	 {props.edit ? (
		<>
			<input 
				color="rgba(11, 131, 230, 0.9)"
				placeholder='Add task'
				value={input}
				onChange={handleChange}
				name="text"
				ref={inputRef}
				className="input-edit"
			/>
			<button onClick={handleSubmit} className="btn">Update</button>
		</>) : (
			<>
			<input 
				placeholder='Add task'
				value={input}
				onChange={handleChange}
				name="text"
				ref={inputRef}
				className="input-add"
			/>
			<button onClick={handleSubmit} className="btn">Add</button>
		</>
		)}
	 </form>
  )
}

export default TodoForm