import React, { useState } from 'react';
import './App.scss'
import ToDos from '../ToDos/ToDos'
import { ToDoListType } from '../types/ToDoListType'

const App = () => {

  const [ToDoList, setToDoList] = useState <Array<ToDoListType>>([
    {
      title: 'ToDo1',
      text: 'Sample text for first todo',
      completed: false
    },
    {
      title: 'ToDo2',
      text: 'Sample text for second todo',
      completed: false
    },
    {
      title: 'ToDo3',
      text: 'Sample text for third todo',
      completed: false
    }
  ])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Practice React To-Do App</h1>
      </header>
      <main>
        <ToDos ToDoList={ToDoList}/>
      </main>
    </div>
  );
}

export default App;