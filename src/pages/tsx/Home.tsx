import { useNavigate } from "react-router-dom";
import "../css/Home.css";
import "../../../public/logo.png";
export function Home() {
  const navigate = useNavigate();
  const handleMenuClick = () => {
    navigate("/menu");
  };
  return (
    <>
      <div className="home-all-page">
        <div className="home-header">
          <img src="logo.png" alt="Logo" className="home-logo" />
          <h1 className="home-welcome">Welcome to our cafe!</h1>
          <h3 className="home-description">
            We offer the most delicious breakfast in town! Basil adds a touch of
            true sophistication to your day. Carefully selected ingredients,
            crisp and fragrant croissants, delicate poached eggs, and aromatic
            freshly ground coffee—all this awaits you first thing in the
            morning. Take a moment to pause time, enjoy the first rays of
            sunshine, and start your day in high spirits.
          </h3>
        </div>
        <button
          onClick={handleMenuClick}
          className="home-menu-button clickable-item"
        >
          <h1>Check menu</h1>
        </button>
      </div>
      <footer className="home-footer">
        <h4 className="home-contact">Contacts: +380 11 111 11 11</h4>
      </footer>
    </>
  );
}
