import React, {Fragment} from 'react';
import '../styles/TodoCounter.css';

function TodoCounter() {
  return (
    <Fragment>
      <h1 className="title-counter">Ey Que pasa</h1>
      <h2 className="TodoCounter">Has completado 2 de 3 TODOs</h2>
    </Fragment>
  );
}

export { TodoCounter };