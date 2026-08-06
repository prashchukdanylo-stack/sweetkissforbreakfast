import { useNavigate } from "react-router-dom";

import "../css/Menu.css";
interface MenuProps {
  data: object[] | null;
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
          (item: { id: number; name: string; photo: string }) => (
            <div
              key={item.id}
              className="menu-item clickable-item"
              onClick={() => {
                navigate(`/dish/${item.id}`);
              }}
            >
              <img
                src={item.photo}
                alt={item.name}
                className="menu-item-image"
              />
              <h2>{item.name}</h2>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
