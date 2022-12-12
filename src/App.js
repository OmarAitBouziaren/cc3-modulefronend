import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import DetailUser from './components/DetailUser';
import ListTodo from './components/ListTodo';
import Acceuil from './components/Acceuil';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Acceuil/>
        <div>
          <Routes>
            <Route path='/ListTodo' component={ListTodo}/>
            <Route path='/Details' component={DetailUser}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
