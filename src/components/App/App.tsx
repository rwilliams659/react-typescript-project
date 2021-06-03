import React, { useState } from 'react';
import './App.scss'
import ToDos from '../ToDos/ToDos'
import { ToDoListType } from '../types/ToDoListType'

const App = () => {

  const [ToDoList, setToDoList] = useState <Array<ToDoListType>>([
    {
      title: 'ToDo1',
      text: 'Sample text for first todo',
      completed: false,
      id: 1
    },
    {
      title: 'ToDo2',
      text: 'Sample text for second todo',
      completed: false,
      id: 2
    },
    {
      title: 'ToDo3',
      text: 'Sample text for third todo',
      completed: false,
      id: 3
    }
  ])

  const deleteTodo = (toDoId: number): any => {
    const newState = ToDoList.filter(toDo => toDo.id !== toDoId)
    setToDoList(newState)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Practice React To-Do App</h1>
      </header>
      <main>
        <ToDos ToDoList={ToDoList} deleteTodo={deleteTodo}/>
      </main>
    </div>
  );
}

export default App;