import React from 'react'
import styles from './ToDo.module.scss'

const ToDo = (props: { title: string, text: string}) => {
  return (
    <section>
      ToDo
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </section>
  )
}

export default ToDo