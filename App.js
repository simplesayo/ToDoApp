import { Routes, Route } from 'react-router-dom';
import Todo from './components/todo.jsx'; 
import './App.css'; 

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Todo />} /> {}
      </Routes>
    </div>
  );
}

export default App;
