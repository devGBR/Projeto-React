import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'

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
  const addTodo = (text, category) => {
    const newTodo = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false
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
    <div className="listTodo">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
      ))}
    </div>
    <TodoForm addTodo={addTodo}/>
   </div>
  )
}

export default App

