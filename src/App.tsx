import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/tsx/Home.tsx';
import { Menu } from './pages/tsx/Menu.tsx';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="menu" element = {<Menu />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
