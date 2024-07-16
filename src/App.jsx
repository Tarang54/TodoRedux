import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import './App.css'

function App() {

  return (
    <div>
      <h1>Todo</h1>
      <AddTodo />
      <Todos/>
    </div>
  )
}

export default App
