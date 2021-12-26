import React, {Fragment} from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
// import './App.css';
import uniqid from 'uniqid';

const todos = [
	{ text: 'Cortar cebolla', completed: true },
	{ text: 'Tomar el cursso de intro a React', completed: false },
	{ text: 'Llorar con la llorona', completed: false },
	{ text: 'LALALALAA', completed: false },
];

function App() {
	return (
		<Fragment>
			<TodoCounter />
			<TodoSearch />

			<TodoList>
				{todos.map(item => (
					<TodoItem
						key={uniqid()}
						text={item.text}
						completed={item.completed}
					/>
				))}
			</TodoList>

			<CreateTodoButton />
		</Fragment>
	);
}

export default App;