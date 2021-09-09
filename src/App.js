import './App.css';
import { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function App() {
const [todos, setToDo]= useState([])


const addTask = (userInput)=>{
if(userInput){
const newItem={
  id:Math.random().toString(36).substr(2,9),
  task: userInput,
  complete: false,
}
setToDo([...todos, newItem])

}
}
const removeTask = (id)=>{
  setToDo([...todos.filter((todo) => todo.id !== id)])
}

const handleToggle = (id)=>{
setToDo([...todos.map((todo)=> 
  todo.id === id ? {...todo, complete:!todo.complete} : {...todo}
)])
} 

  return (
    <div className="App">
   <header>
     <h1>Cписок задач: {todos.length}</h1>
    </header>


    <TodoForm addTask={addTask}/>

    {todos.map((todo)=>{
      return(
      <Todo
      todo={todo}
      key={todo.id}
      toggleTask={handleToggle}
      removeTask={removeTask}
    />
  )
})}

    </div>
  );
}

export default App;
