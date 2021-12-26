import React from 'react';
import '../styles/CreateTodoButton.css'

import { TiPlusOutline } from 'react-icons/ti'

function CreateTodoButton(props) {
  return (
    <button className="CreateTodoButton"><TiPlusOutline /></button>
  );
}

export { CreateTodoButton };
