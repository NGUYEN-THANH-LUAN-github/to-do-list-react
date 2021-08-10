import React, { useState } from 'react'
import Todo from './Todo'
import Form from './Form'
import { v4 as uuid } from 'uuid'
import styled from 'styled-components'

const TodoListWrapper = styled.div`
  margin: 4rem auto;
  padding: 2rem 3rem 3rem;
  max-width: 500px;
  background: #ff6666;
  color: #fff;
  box-shadow: -20px -20px 0px 0px rgba(100, 100, 100, 0.1);
  h1 {
    font-weight: normal;
    font-size: 2.6rem;
    letter-spacing: 0.05em;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    span {
      display: block;
      font-size: 0.8rem;
      margin: 0.2rem 0 0.7rem 3px;
    }
  }
  ul {
    margin-top: 2.6rem;
    list-style: none;
  }
`

export default function TodoList() {
  const [todos, setTodos] = useState([
    { task: 'walk the fish', id: uuid(), completed: false },
    { task: 'groom chickens', id: uuid(), completed: true },
  ])
  const createTodo = newTodo => {
    setTodos([...todos, newTodo])
  }
  const remove = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const updateTodo = (id, updatedTask) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, task: updatedTask } : todo
      )
    )
  }
  const toggleCompletion = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }
  const renderTodos = todos.map(todo => {
    return (
      <Todo
        key={todo.id}
        id={todo.id}
        task={todo.task}
        completed={todo.completed}
        updateTodo={updateTodo}
        remove={() => remove(todo.id)}
        toggleCompletion={() => toggleCompletion(todo.id)}
      />
    )
  })
  return (
    <TodoListWrapper>
      <h1>
        Todo List <span>A Simple React Todo List App</span>
      </h1>
      <ul>{renderTodos}</ul>
      <Form createTodo={createTodo} />
    </TodoListWrapper>
  )
}
