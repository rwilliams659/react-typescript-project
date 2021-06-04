import React, { useState } from 'react'
import styles from './ToDo.module.scss'

const ToDo = (props: { title: string, text: string, id: number, deleteTodo: (toDoId: number) => any }) => {

const [completed, setCompleted] = useState<boolean>(false)

const handleChecked = () => {
  const newValue = !completed
  setCompleted(newValue)
}

  return (
    <section className={styles.todo}>
      <button className={styles.deleteBtn} onClick={() => props.deleteTodo(props.id)}>X</button>
      <section className={styles.todoContent}>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </section>
      <div className={styles.completedLabel}>
        <label htmlFor="completed">{completed ? 'Mark uncomplete' : 'Mark completed' }</label>
        <input type="checkbox" name="completed" value="completed" id={styles.completedBox} onChange={handleChecked} checked={completed}/>
      </div>
    </section>
  )
}

export default ToDo