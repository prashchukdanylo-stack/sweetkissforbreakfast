import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import { Home } from "./pages/tsx/Home.tsx";
import { Menu } from "./pages/tsx/Menu.tsx";
import "./App.css";
import { Dish } from "./pages/tsx/Dish.tsx";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="menu" element={<Menu data={data} />} />
          <Route path="dish/:id" element={<Dish data={data} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
