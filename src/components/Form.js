import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import styled from 'styled-components'

const FormWrapper = styled.form`
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  label {
    min-width: 100%;
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
  }
  input,
  button {
    font-family: 'Quicksand', sans-serif;
    height: 2.2rem;
  }
  input {
    flex-grow: 1;
    border: none;
    background: #f7f1f1;
    padding: 0 1.5rem;
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
    transition: background 5s ease-out;
    &:hover {
      filter: brightness(1.2);
    }
  }
`

export default function Form({ createTodo }) {
  const [state, setState] = useState({ task: '' })
  const handleChange = e => {
    setState({ task: e.target.value })
  }
  const handleSubmit = e => {
    e.preventDefault()
    createTodo({ ...state, id: uuid(), completed: false })
    setState({ task: '' })
  }
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <label htmlFor='task'>New Todo</label>
      <input
        type='text'
        placeholder='New Todo'
        id='task'
        /* name='task' */
        value={state.task}
        onChange={handleChange}
      />
      <button>Add Todo</button>
    </FormWrapper>
  )
}
