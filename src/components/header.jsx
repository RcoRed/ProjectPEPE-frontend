import "/src/components-style/header.css";
import logo from "/src/images/Logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Searchbar from "./searchBar";
import { useDispatch, useSelector } from "react-redux";
import { setMyDish } from "../store";

//qui ho bisogno di aggiornare il redux perchè il nav e il form della search bar sono sorelle e non possono comunicare in alcun modo
//poi lo stato aggiornato lo leggerà recipes-card e lo passerà all'api, così riusciamo a intrecciare
//tutte le possibilità di ricerca tra filtri e navbar
function Header() {
  const dispatch = useDispatch();
  function changeDish(dish) {
    dispatch(setMyDish(dish));
  }

  const { user } = useSelector((state) => {
    return {
      user: state.user.user,
    };
  });

  const navigate = useNavigate();
  const toUser = () => {
    navigate("/user");
  };

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
              {user.firstname} {user.lastname}
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
            <NavLink
              to={"/all"}
              onClick={() => {
                changeDish("");
              }}
            >
              <button className="menu-button">Home</button>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"appetizer"}
              onClick={() => {
                changeDish("APPETIZER");
              }}
            >
              <button className="menu-button">Antipasti</button>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"first"}
              onClick={() => {
                changeDish("FIRST");
              }}
            >
              <button className="menu-button">Primi</button>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"second"}
              onClick={() => {
                changeDish("SECOND");
              }}
            >
              <button className="menu-button">Secondi</button>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"dessert"}
              onClick={() => {
                changeDish("DESSERT");
              }}
            >
              <button className="menu-button">Dessert</button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
