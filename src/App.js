import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Todo from './components/Todo';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <Header/>
      <Todo/>
      <Todos/>
      <Footer/>
    </div>
  );
}

export default App;
