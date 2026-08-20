import {useNavigate} from "react-router-dom";
import "../css/Home.css";
import "../../../public/logo.png";
export function Home() {

    const navigate = useNavigate();
    const handleMenuClick = () => {
        navigate("/menu");
    }
  return (
    <>
    <div className="home-all-page">
        <div className = "home-header">
      <img src="logo.png" alt="Logo" className="home-logo" />
      <h1 className="home-welcome">Вітаю вас у нашому ресторані!</h1>
      <h3 className="home-description">
        Ми пропонуємо найсмачніший сніданок у місті! Базилік додасть справжньої
        витонченості вашому дню.Уважно дібрані інгредієнти, хрусткі духмяні
        круасани, ніжні яйця пашот та ароматна свіжозмелена кава — усе це чекає
        на вас з самого ранку. Дозвольте собі зупинити час, насолодитися першими
        сонячними променями та зарядитися чудовим настроєм.
      </h3>
      </div>
      <button onClick = {handleMenuClick} className = "home-menu-button clickable-item"><h1>Переглянути меню</h1></button>
    </div>
    <footer className="home-footer">
        <h4 className="home-contact">Контакти: +380 11 111 11 11</h4>
    </footer>
    </>
  );
}
