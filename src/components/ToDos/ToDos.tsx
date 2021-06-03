import React from 'react'
import styles from './ToDos.module.scss'
import ToDo from '../ToDo/ToDo'
import { ToDoListType } from '../types/ToDoListType'

const ToDos = (props: { ToDoList: Array<ToDoListType> }) => {

  const allToDos: any = props.ToDoList.map(toDoItem => {
    return <ToDo title={toDoItem.title} text={toDoItem.text}/>
  })

  return (
    <section className="todos">
      { allToDos }
    </section>
  )
}

export default ToDos