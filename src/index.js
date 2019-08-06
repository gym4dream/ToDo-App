import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import Search from './components/search';
import TodoList from './components/todo-list';

const App = () => {

  const todoData = [
    { label: 'Drink Coffee', important: false },
    { label: 'Create Awesome App', important: true },
    { label: 'Go Shopping', important: false }
  ];

  return (
    <div>
      <AppHeader />
      <Search />
      <TodoList todos={todoData} />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
