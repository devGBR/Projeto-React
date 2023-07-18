import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
import Search from './components/Search'
import Filter from './components/Filter'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar Funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
      button: "Completar"
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false,
      button: "Completar"
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
      button: "Completar"
    }
  ])

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const [sort, setSort] = useState("A-Z")

  const addTodo = (text, category) => {
    const newTodo = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
        button: "Completar"
      },
    ];
    setTodos(newTodo);
  }
  const removeTodo = (id) => {
    const newTodo = [...todos];
    const filterTodo = newTodo.filter(
      (todos) => todos.id !== id ? todos : null
    );
    setTodos(filterTodo)
  }
  const completeTodo = (id) => {
    const newTodo = [...todos];
    newTodo.forEach((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
        todo.isCompleted ? (todo.button = "Refazer") : (todo.button = "Completar");
        setTodos(newTodo)
      }
    });
  };
    
  
  return (
   <div className="app">
    <h1>Lista de Tarefas</h1>
    <Search search={search} setSearch={setSearch}/>
    <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
    <div className="listTodo">
      {todos.filter((todo) => filter === "All" ? true : filter === "Completed" ? todo.isCompleted : !todo.isCompleted)
      .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => sort === "A-Z" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text) )
      .map((todo) => (
        <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
      ))}
    </div>
    <TodoForm addTodo={addTodo}/>
   </div>
  )
}

export default App

