import { Link } from "react-router-dom";
import '/src/components-style/header.css';
import Searchbar from "./searchBar";
import logo from "/src/images/Logo.png";

function Header() {
    return (
        <header>
            <div className="div1">
                <div className="div-logo">
                    <img src={logo} alt="logo"></img>
                </div>
                <Searchbar />
                <div className="div-button">
                    <Link to={"/login"}><button className="button">Accedi/Registrati</button></Link>
                </div>
            </div>
            <nav>
                <ul className="menu">
                     <li><Link to={"/"}><button className="menu-button">Home</button></Link></li> 
                     <li><Link to={"appetizer"}><button className="menu-button">Antipasti</button></Link></li>
                     <li><Link to={"first"}><button className="menu-button">Primi</button></Link></li> 
                     <li><Link to={"second"}><button className="menu-button">Secondi</button></Link></li> 
                     <li><Link to={"dessert"}><button className="menu-button">Dessert</button></Link></li> 
                </ul>
            </nav>
        </header>
    );


}
export default Header; 