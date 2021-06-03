import React from 'react'
import styles from './ToDo.module.scss'

const ToDo = (props: { title: string, text: string, id: number, deleteTodo: (toDoId: number) => any }) => {
  return (
    <section className={styles.todo}>
      <button className={styles.deleteBtn} onClick={() => props.deleteTodo(props.id)}>X</button>
      <section className={styles.todoContent}>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </section>
    </section>
  )
}

export default ToDo