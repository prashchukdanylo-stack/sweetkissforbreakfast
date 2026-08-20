import { useNavigate } from "react-router-dom";

import "../css/Menu.css";
import type {Dish} from "../../App.tsx";

interface MenuProps {
  data: Dish[] | null;
}

export function Menu({ data }: MenuProps) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="menu-title-container">
        <button
          onClick={() => {
            navigate("/");
          }}
          className="clickable-item home-button"
        >
          <h1>Home</h1>
        </button>
        <h1 className="menu-title">Меню</h1>
      </div>

      <div className="menu">
        {(data || []).map(
          (item: Dish) => (
            <div
              key={item.id}
              className="menu-item clickable-item"
              onClick={() => {
                navigate(`/dish/${item.id}`);
              }}
            >
              <img
                src={`${import.meta.env.BASE_URL}${item.photo.replace(/^\//, '')}`}
                alt={item.name}
                className="menu-item-image"
              />
              <div className="menu-item-info">

              <h2 className = "menu-item-name">{item.name}</h2>
              <h4 className="menu-item-price">{item.price}грн</h4>
             </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
