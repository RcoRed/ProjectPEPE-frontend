import { NavLink, Outlet } from "react-router-dom";
import "/src/components-style/user-page.css";

export default function UserPage(){
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
                    <NavLink to={"/"} className="navlink">
                        <button className="navlink-button">Logout</button>
                    </NavLink>
                </div>                
            </nav>
            <div className="main-section">
                <Outlet/>
            </div>
        </div>
    )
}