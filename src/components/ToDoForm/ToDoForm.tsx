import { title } from 'process'
import React, { useState } from 'react'
import styles from './ToDoForm.module.scss'
import { newToDoType } from '../types/newToDoType'

const ToDoForm = (props: { addTodo: (todo: newToDoType) => any }) => {

  const [newToDo, setNewToDo] = useState <newToDoType>({
    title: '',
    text: '',
    completed: false,
    id: null,
  })

  const [error, setError] = useState <boolean>(false)

  const handleChange = (e: any) => { 
    if (error) {
      setError(false)
    }
    const updatedTodo: newToDoType = {
      ...newToDo,
      [e.target.id]: e.target.value
    }
    setNewToDo(updatedTodo)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (newToDo.title && newToDo.text) {
      props.addTodo(newToDo)
      setNewToDo({
        title: '',
        text: '',
        completed: false,
        id: null,
      })
    } else {
      setError(true)
    }
  }

  return (
    <section className={styles.formSection}>
      <label htmlFor="todo-form" className={styles.formLabel}>Add New Todo</label>
      <form className={styles.todoForm} id="todo-form">
        <input className={styles.addTodoInput} type="text" name="title" id="title" placeholder="Todo title" value={newToDo.title} onChange={handleChange}/>
        <textarea className={styles.addTodoInput} name="text" id="text" form="todo-form" placeholder="Describe your todo..." value={newToDo.text} onChange={handleChange}/>
        <input className={styles.submitBtn} type="submit" name="Add Todo" onClick={handleSubmit}/>
      </form>
      { error && <p className={styles.errorMsg}>Please fill out a title and to-do text!</p> }
    </section>
  )
}

export default ToDoForm