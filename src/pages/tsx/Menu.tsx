import { useNavigate } from "react-router-dom";

import "../css/Menu.css";
import type {Dish} from "../../App.tsx";
import { useState, useEffect} from "react";

interface MenuProps {
  data: Dish[] | null;
}

export function Menu({ data }: MenuProps) {
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const [curItem, setCurItem] = useState<Dish | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

    useEffect(()=> {if (disabled) {
      document.body.style.overflow = 'hidden';
     }
     else {
      document.body.style.overflow = '';
     } }, [disabled]);


     
  function displayItem(item: Dish) {
    setDisabled(true);
    setCurItem(item);

  }

  function stopDisplayingItem() {
    setDisabled(false);
  }

  
  const displayedDishes = selectedCategory ? data?.filter((dish) => dish.category===selectedCategory):data;


  return (
    <div className="menu-page">
      <div className={`menu-content ${disabled ? "disabled" : ""}`}>
        <header className="menu-title-container">
          <button
            onClick={() => navigate("/")}
            className="clickable-item home-button"
          >
            <h1>Home</h1>
          </button>
          <h1 className="menu-title">Menu</h1>
        </header>

        <div className="menu-main-area">
          <aside className="menu-sidebar">
            <h1>Categories</h1>
            <h3 onClick={() => setSelectedCategory("")} className={`category ${selectedCategory === "" ? "active" : ""}`}>All</h3>
            <h3 onClick={() => setSelectedCategory("Main Dishes")} className={`category ${selectedCategory === "Main Dishes" ? "active" : ""}`}>Main Dishes</h3>
            <h3 onClick={() => setSelectedCategory("Salads & Bowls")} className={`category ${selectedCategory === "Salads & Bowls" ? "active" : ""}`}>Salads & Bowls</h3>
            <h3 onClick={() => setSelectedCategory("Breakfast")} className={`category ${selectedCategory === "Breakfast" ? "active" : ""}`}>Breakfast</h3>
            <h3 onClick={() => setSelectedCategory("bakery")} className={`category ${selectedCategory === "bakery" ? "active" : ""}`}>Bakery</h3>
            <h3 onClick={() => setSelectedCategory("Burgers & Sandwiches")} className={`category ${selectedCategory === "Burgers & Sandwiches" ? "active" : ""}`}>Burgers & Sandwiches</h3>
            <h3 onClick={() => setSelectedCategory("Desserts")} className={`category ${selectedCategory === "Desserts" ? "active" : ""}`}>Desserts</h3>
            <h3 onClick={() => setSelectedCategory("Drinks")} className={`category ${selectedCategory === "Drinks" ? "active" : ""}`}>Drinks</h3>
          </aside>

          <main className="menu">
            {!displayedDishes && "Sorry, something went wrong with product data!"}
            {(displayedDishes || []).map((item: Dish) => (
              <div
                key={item.id}
                className="menu-item clickable-item"
                onClick={() => displayItem(item)}
              >
                <img
                  src={`${import.meta.env.BASE_URL}${item.photo.replace(/^\//, "")}`}
                  alt={item.name}
                  className="menu-item-image"
                />
                <div className="menu-item-info">
                  <h2 className="menu-item-name">{item.name}</h2>
                  <h4 className="menu-item-price">{item.price} uah</h4>
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>

      {disabled && (
        <div className="item">
          <img
            className="cross-btn"
            src={`${import.meta.env.BASE_URL}cross.webp`}
            onClick={stopDisplayingItem}
            alt="Close"
          />
          <img
            src={`${import.meta.env.BASE_URL}${curItem?.photo.replace(/^\//, "")}`}
            className="item-image"
            alt={curItem?.name}
          />
          <h1 className="item-name">{curItem?.name}</h1>
          <h2 className="item-price">{curItem?.price} uah</h2>
          <h4 className="item-rating">rating: {curItem?.rating}/5</h4>
          <h3 className="item-description">{curItem?.description}</h3>
        </div>
      )}
    </div>
  );
}
