import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "/src/components-style/user-page.css";
import { useDispatch } from "react-redux";
import { changeUser } from "../store";

export default function UserPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(changeUser(null));
    //navigate("/");
  };
  return (
    <div className="user-page">
      <nav className="sidebar">
        <div className="div-buttons">
          <NavLink to={"/user"}>
            <button className="navlink-button">Informazioni personali</button>
          </NavLink>
          <NavLink to={"taste-manager"}>
            <button className="navlink-button">Gestione gusti</button>
          </NavLink>
          <NavLink to={"food-storage"}>
            <button className="navlink-button">La mia dispensa</button>
          </NavLink>
          <NavLink to={"/"} className="last-navlink">
            <button className="navlink-button">Home</button>
          </NavLink>
        </div>
        <div className="logout-button">
          <NavLink to={"/"} onClick={logout} className="navlink">
            <button className="navlink-button logout-button-red">Logout</button>
          </NavLink>
        </div>
      </nav>
      <div className="main-section">
        <Outlet />
      </div>
    </div>
  );
}
