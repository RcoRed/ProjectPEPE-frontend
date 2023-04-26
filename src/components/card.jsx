import '/src/components-style/card.css'
import ShowCard from './showCard';
import { useEffect, useState } from 'react';
import apiRecipe from '../api';

function Card() {
    const [recipes, setRecipes] = useState([]);
    
    async function getRecipe(){
        const result = await apiRecipe("DESSERT");        
        setRecipes(result);
    }
    const renderedCard = recipes.map((recipe) => {
        return <ShowCard recipe = {recipe}/>
    });

    useEffect(() => {
        getRecipe();
    }, []);

    return (
       <div>{renderedCard}</div>
    );
}
export default Card;