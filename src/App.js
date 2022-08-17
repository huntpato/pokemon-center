import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Form from './components/Form/Form';
import Home from './components/Home/Home';


function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/formularioIngreso" element={<Form />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
