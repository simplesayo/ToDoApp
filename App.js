import './App.css';

import todo from "./components/todo.jsx"
function App() {
  return (
    <div >
      <Routes>
        <Routes path='/' element={todo}></Routes>
      </Routes>
    </div>
  );
}

export default App;
