import {useState} from "react";

export default function TodoInput(props) {
  const {handleAddTodos,todoValue,setTodoValue,inputRef} = props
  return (
    <header>
      <input ref={inputRef}  value={todoValue}
             onKeyDown={(e) => {
               const value = todoValue.trim()
               if (!value) {
                 setTodoValue('')
                 return
               }
               if (e.key === "Enter") {
                 handleAddTodos(value)
                 setTodoValue('')
               }
             }}
             onChange={(e) => {
               setTodoValue(e.target.value)
             }}
             placeholder="Enter Todo..."/>
      <button onClick={() => {
        handleAddTodos(todoValue)
        setTodoValue('')
      }}>Add</button>
    </header>
  )
}