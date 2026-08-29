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


  return (
    <div className="menu-page">
    <div className = {disabled ? "disabled" : ""}>
      <div className="menu-title-container">
        <button
          onClick={() => {
            navigate("/");
          }}
          className="clickable-item home-button"
        >
          <h1>Home</h1>
        </button>
        <h1 className="menu-title">Menu</h1>
      </div>

      <div className="menu">
        {(data || []).map(
          (item: Dish) => (
            <div
              key={item.id}
              className="menu-item clickable-item"
              onClick={() => displayItem(item)}
            >
              <img
                src={`${import.meta.env.BASE_URL}${item.photo.replace(/^\//, '')}`}
                alt={item.name}
                className="menu-item-image"
              />
              <div className="menu-item-info">

              <h2 className = "menu-item-name">{item.name}</h2>
              <h4 className="menu-item-price">{item.price} uah</h4>
             </div>
            </div>
          ),
        )}
      </div>
    </div>
    {disabled && <div className="item">
        <img className="cross-btn" src={`${import.meta.env.BASE_URL}cross.webp`} onClick={stopDisplayingItem}></img>
        <img src={`${import.meta.env.BASE_URL}${curItem?.photo.replace(/^\//, '')}`} className="item-image"></img>
        <h1 className="item-name">{curItem?.name}</h1>
        <h2 className="item-price">{curItem?.price} uah</h2>
        <h4 className="item-rating">rating: {curItem?.rating}/5</h4>
        <h3 className="item-description">{curItem?.description}</h3>
      </div> }
    </div>
  );
}
