import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import { Home } from "./pages/tsx/Home.tsx";
import { Menu } from "./pages/tsx/Menu.tsx";
import "./App.css";
import { Dish } from "./pages/tsx/Dish.tsx";


export interface Dish {
   id: number;
    name: string;
    photo: string;
    description: string;
    rating: number;
    price: number

}
function App() {
  const [data, setData] = useState<Dish[] | null>(null);
  useEffect(() => {

    const API_URL = import.meta.env.VITE_API_URL || "https://sweetkissforbreakfast.onrender.com/api";
    fetch(`${API_URL}/products`)
      .then((response) => response.json())
      .then((data : Dish[]) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <BrowserRouter basename="/sweetkissforbreakfast/">
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
