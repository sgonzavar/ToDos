import React from 'react';
import '../styles/TodoItem.css';

import {BsCheckLg} from 'react-icons/bs'
import {MdCancel} from 'react-icons/md'

function TodoItem(props) {
	return (
		<li className="TodoItem">
			<span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
				<BsCheckLg/>
			</span>
			<p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
				{props.text}
			</p>
			<span className="Icon Icon-delete">
				<MdCancel/>
			</span>
		</li>
	);
}

export { TodoItem };