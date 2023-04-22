import { Link } from "react-router-dom";
import Searchbar from "./searchBar";

function Header() {
    return (
        <header>
            <div className="div1">
                <div className="div-button">
                    <button className="button">Menu</button>
                </div>
                <Searchbar />
                <div className="div-button">
                    <Link to={"login"}><button className="button">Accedi/Registrati</button></Link>
                </div>
            </div>
            <nav>
                <ul className="menu">
                     <li><a href="#"><button className="menu-button">Home</button></a></li> 
                     <li><a href="#"><button className="menu-button">Antipasti</button></a></li> 
                     <li><a href="#"><button className="menu-button">Primi</button></a></li> 
                     <li><a href="#"><button className="menu-button">Secondi</button></a></li> 
                     <li><a href="#"><button className="menu-button">Dessert</button></a></li> 
                </ul>
            </nav>
        </header>
    );


}
export default Header; 