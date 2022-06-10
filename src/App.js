 import './App.css';
 import Todo from './components/Todo';
 import Form from './components/Form';
 import FilterButton from './components/FilterButton';
 import React, { useState } from "react";
 import {nanoid} from "nanoid";


function App(props) {
  //To iterate in data coming from index .js
  const [tasks, setTasks]=useState(props.task);

  const taskList = tasks.map(task => (
    <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
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
  
  return (
    <div className="todoapp stack-large">
      <h1>TodoList</h1>
      <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
        <FilterButton name="All"/>
        <FilterButton name="Active"/>
        <FilterButton name="Completed"/>
      </div>
      <h2 id="list-heading">
        {headingText}
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
       {taskList}
      </ul>
    </div>
  );
}


export default App;