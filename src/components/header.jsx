import SearchBar from "./searchBar";

function Header(){
    return (
        <header>
            <button className="button">Menu</button>
            <SearchBar />
            <button className="button">Accedi</button>
        </header>
    );


}
export default Header; 