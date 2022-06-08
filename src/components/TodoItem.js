import React from 'react'

export default function TodoItem (task) {
  return (
    <div>
      <h4>{task.task.title}</h4>
      <p>{task.task.desc}</p>
      <button className='btn btn-sm btn-danger' onClick={()=>task.OnDelete(task.task)} >Delete</button>
    </div>
  )
}
//https://onecompiler.com/questions/3w5uthte3/-unhandled-runtime-error-typeerror-data-filter-is-not-a-function-in-react-application 