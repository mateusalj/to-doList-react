import { useState } from 'react'

import Todo from './components/Todo'
import Search from './components/Search'
import TodoForm from './components/TodoForm'

import './App.css'
import Filter from './components/Filter'




function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      Text: "Criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      Text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      Text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    }
  ])

  const [search, setSearch] = useState("")

  const [filter, setFilter] = useState("All")
  const [sort, setSort] = useState("Asc")

  const addTodo = (Text, category) => {

      const newTodos =[...todos, {
        id: Math.floor(Math.random() * 1000), 
        Text,
        category,
        isCompleted: false,
      },
    ]

    setTodos(newTodos)
  }

  const removeTodo =(id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null
   )
   setTodos(filteredTodos)
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos)
  }

  return (

    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch}/>
      <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
      <div className="todo-list">
        {todos
        .filter((todo) => 
        filter === "All" 
        ? true 
        : filter === "Complete" 
        ? todo.isCompleted
        : !todo.isCompleted
        )
        .filter((todo) => 
        todo.Text.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => 
        sort === "Asc" 
        ? a.Text.localeCompare(b.Text)
        : b.Text.localeCompare(a.Text)
        )
        .map((todo) => (
            <Todo 
            key={todo.id} 
            todo = {todo} removeTodo={removeTodo} completeTodo={completeTodo}
            />
        ))}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default App
