import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Todos from './components/Todos';
import React,  {useState}  from 'react';
function App() {
  const OnDelete=(data)=>{
    console.log("deleted",data)

    setTask(data.filter((obj)=>{
    return obj!==data;
    }))
  }
  
  const [data,setTask]=useState([{
    sno:1,
    title: "Learn react js",
    desc:"Learn from react docs"
  },{
    sno:2,
    title: "Read Book",
    desc:"Money Book"
  }
]);
  return (
    
    <div className="App">
      <Header title="ToDo"/>
      <Todos todos={data} OnDelete={OnDelete}  />
      <Footer/>
    </div>
  );
}

export default App;
