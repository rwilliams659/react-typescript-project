import React from 'react'
import styles from './ToDos.module.scss'
import ToDo from '../ToDo/ToDo'
import { ToDoListType } from '../types/ToDoListType'

const ToDos = (props: { ToDoList: Array<ToDoListType>, deleteTodo: (toDoId: number) => any }) => {

  const allToDos: any = props.ToDoList.map((toDoItem) => {
    return <ToDo title={toDoItem.title} text={toDoItem.text} key={toDoItem.id} id={toDoItem.id} deleteTodo={props.deleteTodo}/>
  })

  return (
    <section className={styles.todos}>
      { allToDos }
    </section>
  )
}

export default ToDos