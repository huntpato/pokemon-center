import { Routes, Route } from 'react-router-dom';
import './App.css';
import Form from './components/Form/Form';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/formularioIngreso" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
