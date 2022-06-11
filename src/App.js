 import './App.css';
 import Todo from './components/Todo';
 import Form from './components/Form';
 import FilterButton from './components/FilterButton';
 import React, { useState } from "react";
 import {nanoid} from "nanoid";


function App(props) {
  //filter buttons
 const [filter,setFilter]=useState('All');
 const FILTER_MAP ={
   All:()=>true,
   Active: task=>!task.completed,
   Completed: task=> task.completed
 };
 const FILTER_NAMES=Object.keys(FILTER_MAP);
 const filterlist= FILTER_NAMES.map(name =>(
   <FilterButton 
   key={name} 
   name={name}
   isPressed={name=== filter}
   setFilter={setFilter}/>
 ));
  //To iterate in data coming from index .js
  const [tasks, setTasks]=useState(props.task);
  //toggle bug resolve
  function toggleTaskCompleted(id){
   const updatedTasks=tasks.map(task=> {
     if(id === task.id){
       return {...task,completed:!task.completed}
     }
     return task;
   });
   setTasks(updatedTasks);
}
  const taskList = tasks.filter(FILTER_MAP[filter]).map(task => (
    <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    )
  );  
  //to add task
  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }
  //for heading counter
  const taskNoun= taskList.length!==1?'tasks':'task';
  const headingText=`${taskList.length} ${taskNoun} remaining`;
 //To delete task
 function deleteTask(id) {
   const remainingTasks=tasks.filter(task=> id!==task.id);
   setTasks(remainingTasks);
  //  console.log(id);
 }
 // To edit tasks
 function editTask(id,newName){
   const editTasklist=tasks.map(task =>{
     if(id===task.id){
       return {...task,name: newName}
     }
     console.log(task);
     return task;
   });
   setTasks(editTasklist);
 }
 
  return (
    <div className="todoapp stack-large">
      <h1>TodoList</h1>
      <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
        {/* <FilterButton name="All"/>
        <FilterButton name="Active"/>
        <FilterButton name="Completed"/> */}
        {filterlist}
      </div>
      <h2 id="list-heading">
        {headingText}
      </h2>
      {/* <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      > */}
       {taskList}
      {/* </ul> */}
    </div>
  );
}


export default App;

