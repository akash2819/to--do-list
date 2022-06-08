import React from 'react';
import TodoItem from './TodoItem';
export default function Todos (props) {
  return (
    <div className='container'>
      <h1 >ToDo List</h1>
      {props.todos.map((todo)=>{
         return <TodoItem task ={todo} key={props.sno} OnDelete={props.OnDelete}/>
      }) }
     
    </div>
  )
}
