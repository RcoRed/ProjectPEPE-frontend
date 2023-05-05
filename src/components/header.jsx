import "/src/components-style/header.css";
import logo from "/src/images/Logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Searchbar from "./searchBar";

function Header({ user }) {
  const navigate = useNavigate();
  const toUser = () => {
    navigate("/user", { state: user.person });
  };
  console.log(user);
  return (
    <header>
      <div className="head">
        <div className="div-logo">
          <img src={logo} alt="logo"></img>
        </div>
        <Searchbar user={user} />
        {user ? (
          <div className="divBenvenuto">
            <p>Benvenuto</p>
            <strong onClick={toUser}>
              {user.person.firstname} {user.person.lastname}
            </strong>
          </div>
        ) : (
          <div className="div-button">
            <Link to={"/login"}>
              <button className="button">Accedi/Registrati</button>
            </Link>
          </div>
        )}
      </div>
      <nav>
        <ul className="menu">
          <li>
            <NavLink to={"/"}>
              <button className="menu-button">Home</button>
            </NavLink>
          </li>
          <li>
            <NavLink to={"appetizer?myDish=APPETIZER"}>
              <button className="menu-button">Antipasti</button>
            </NavLink>
          </li>
          <li>
            <NavLink to={"first?myDish=FIRST"}>
              <button className="menu-button">Primi</button>
            </NavLink>
          </li>
          <li>
            <NavLink to={"second?myDish=SECOND"}>
              <button className="menu-button">Secondi</button>
            </NavLink>
          </li>
          <li>
            <NavLink to={"dessert?myDish=DESSERT"}>
              <button className="menu-button">Dessert</button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
