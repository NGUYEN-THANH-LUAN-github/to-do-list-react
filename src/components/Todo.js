import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'

const strikeitem = keyframes`
  to {
    width: calc(100% + 1rem)
  }
`

const TodoWrapper = styled.div`
  display: flex;
  margin: 0 -3rem 4px;
  padding: 1.1rem 3rem;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  li {
    position: relative;
    transition: opacity 0.4s linear;
  }
  li.completed {
    opacity: 0.6;
    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: -0.5rem;
      display: block;
      width: 0%;
      height: 2px;
      background: #fff;
      animation: ${strikeitem} 0.5s ease-out 0s forwards;
    }
  }
  .utils {
    flex-shrink: 0;
    padding-left: 0.7em;
    input {
      transform: scale(1.2);
      margin-right: 10px;
    }
    button {
      border: none;
      font-size: 1em;
      margin: 0.4em;
      background: none;
      -webkit-appearance: none;
      cursor: pointer;
      color: #fff;
    }
  }
  form {
    display: flex;
    flex-wrap: wrap;
    input,
    button {
      font-family: 'Quicksand', sans-serif;
      height: 2.2rem;
    }
    input {
      flex-grow: 1;
      border: none;
      background: #f7f1f1;
      padding: 0 1.5em;
      font-size: initial;
    }
    button {
      padding: 0 1.3rem;
      border: none;
      background: #ff6666;
      color: white;
      text-transform: uppercase;
      font-weight: bold;
      border: 1px solid rgba(255, 255, 255, 0.3);
      margin-left: 10px;
      cursor: pointer;
      transition: background 0.2s ease-out;
      &:hover {
        filter: brightness(1.2);
      }
    }
  }
`

export default function Todo({
  id,
  task,
  completed,
  remove,
  updateTodo,
  toggleCompletion,
}) {
  const [isEditting, toggleEdit] = useState(false)
  const [taskEdit, setTaskEdit] = useState(task)
  const toggleForm = () => {
    toggleEdit(!isEditting)
  }
  const handleUpdate = e => {
    e.preventDefault()
    updateTodo(id, taskEdit)
    toggleEdit(!isEditting)
  }
  const handleChangeEdit = e => {
    setTaskEdit(e.target.value)
  }
  let result
  if (isEditting) {
    result = (
      <TodoWrapper>
        <form onSubmit={handleUpdate}>
          <input type='text' value={taskEdit} onChange={handleChangeEdit} />
          <button>Save</button>
        </form>
      </TodoWrapper>
    )
  } else {
    result = (
      <TodoWrapper completed={completed}>
        <li className={completed && 'completed'}>{task}</li>
        <div className='utils'>
          <input
            type='checkbox'
            onChange={toggleCompletion}
            checked={completed}
          />
          <button onClick={toggleForm}>
            <i className='fas fa-pen' />
          </button>
          <button onClick={remove}>
            <i className='fas fa-trash' />
          </button>
        </div>
      </TodoWrapper>
    )
  }
  return result
}
