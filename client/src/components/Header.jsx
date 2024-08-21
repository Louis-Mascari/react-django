import { useNavigate } from "react-router-dom";
import "../styles/Header.css";
import icon from "/favicon.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <img src={icon} onClick={() => navigate("/")}></img>
      <h1 className="app-name" onClick={() => navigate("/")}>
        Recipe Wrangler
      </h1>
      <nav className="nav-links">
        <button onClick={() => navigate("/")}>View Recipes</button>
        <button onClick={() => navigate("/add")}>Add Recipe</button>
      </nav>
    </header>
  );
};

export default Header;
