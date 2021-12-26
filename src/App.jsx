import React, { useState } from 'react';
import AppUI from './components/AppUI'


const defaulTodos = [
	{ text: 'Cortar cebolla', completed: true },
	{ text: 'Tomar el cursso de intro a React', completed: false },
	{ text: 'Llorar con la llorona', completed: false },
	{ text: 'LALALALAA', completed: false },
];

function App() {
	const [searchValue, setSearchValue] = useState("");
	const [todos, setTodos] = useState(defaulTodos);

	const completedTodos = todos.filter(item => !!item.completed).length;
	const totalTodos = todos.length;

	let searchedTodos = [];

	if (!searchValue.length >= 1) {
		searchedTodos = todos;
	} else {
		searchedTodos = todos.filter(todo => {
			const todoTxt = todo.text.toLowerCase();
			const searchTxt = searchValue.toLowerCase();
			return todoTxt.includes(searchTxt);
		});
	}

	const completeTodo = (text) => {
		const todoIndex = todos.findIndex(todo => todo.text === text);
		const newTodos = [...todos];
		newTodos[todoIndex].completed = true;
		setTodos(newTodos);
	};

	const deleteTodo = (text) => {
		const todoIndex = todos.findIndex(todo => todo.text === text);
		const newTodos = [...todos];
		newTodos.splice(todoIndex, 1);
		setTodos(newTodos);
	};

	return (
		<AppUI
			totalTodos={totalTodos}
			completedTodos={completedTodos}
			searchValue={searchValue}
			setSearchValue={setSearchValue}
			searchedTodos={searchedTodos}
			completeTodo={completeTodo}
			deleteTodo={deleteTodo}
		/>
	);
}

export default App;