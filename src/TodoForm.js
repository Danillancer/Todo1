import { useState } from 'react';

function TodoForm ({addTask}){
const [userInput, setUserInput]= useState('')


const handleChange =(e)=>{
    setUserInput(e.currentTarget.value)
}

const handleSubmit =(e)=>{
    e.preventDefault() 
    addTask(userInput)
    setUserInput('')
}
return (


<form onSubmit={handleSubmit}>
    <input 
    value={userInput}
    type="text"
    placeholder="Введите задачу"
    onChange={handleChange}
    />
<button>Сохранить</button>
</form>
)
    


}

export default TodoForm