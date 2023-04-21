import SearchBar from "./searchBar";

function Header() {
    return (
        <header>
            <div className="div1">
                <div className="div-button">
                    <button className="button">Menu</button>
                </div>
                <SearchBar />
                <div className="div-button">
                    <button className="button">Accedi</button>
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