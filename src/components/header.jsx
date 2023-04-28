import { Link, NavLink, redirect, useNavigate } from "react-router-dom";
import "/src/components-style/header.css";
import Searchbar from "./searchBar";
import logo from "/src/images/Logo.png";

function Header() {
  const loadCards = () => {
    redirect("appetizer");
  };

  return (
    <header>
      <div className="div1">
        <div className="div-logo">
          <img src={logo} alt="logo"></img>
        </div>
        <Searchbar />
        <div className="div-button">
          <Link to={"/login"}>
            <button className="button">Accedi/Registrati</button>
          </Link>
        </div>
      </div>
      <nav>
        <ul className="menu">
          <li>
            <NavLink to={"/"}>
              <button className="menu-button">Home</button>
            </NavLink>
          </li>
          <li>
            <NavLink to={"appetizer"}>
              <button className="menu-button">Antipasti</button>
            </NavLink>
          </li>
          <li>
            <NavLink to={"first"}>
              <button className="menu-button">Primi</button>
            </NavLink>
          </li>
          <li>
            <NavLink to={"second"}>
              <button className="menu-button">Secondi</button>
            </NavLink>
          </li>
          <li>
            <NavLink to={"dessert"}>
              <button className="menu-button">Dessert</button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
