import '/src/components-style/searchbar.css'

function Searchbar() {
    return (
        <div className="searchbar">
            <input placeholder="Cerca una ricetta..." id="searchbarInput"></input>
        </div>

    );
}
export default Searchbar;