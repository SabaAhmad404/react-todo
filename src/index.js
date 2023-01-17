import React from 'react';
import ReactDOM from 'react-dom';
// component file
import TodoContainer from './components/TodoContainer';

// stylesheet
import './app.css';

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById('root'),
);
