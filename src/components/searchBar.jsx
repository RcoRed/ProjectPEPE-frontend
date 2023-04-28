import { Form } from 'react-router-dom';
import '/src/components-style/searchbar.css'

function Searchbar() {
    return (
        <Form className="searchbar" action='/searchrecipe'>
            <input
                name='searchbarInput'
                placeholder="Cerca una ricetta..."
                id="searchbarInput"/>
        </Form>
    );
}
export default Searchbar;