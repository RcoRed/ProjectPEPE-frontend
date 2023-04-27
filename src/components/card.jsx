import "/src/components-style/card.css";
import ShowCard from "./showCard";
import { useEffect, useState } from "react";
import apiRecipe from "../api";

function Card({ dish }) {
  const [recipes, setRecipes] = useState([]);

  async function getRecipe() {
    const result = await apiRecipe(dish);
    setRecipes(result);
  }
  const renderedCard = recipes.map((recipe) => {
    return (
      <div className="div-card" key={recipe.id}>
        <ShowCard recipe={recipe} />
      </div>
    );
  });

  useEffect(() => {
    getRecipe();
  }, []);

  return <div className="div-cards">{renderedCard}</div>;
}
export default Card;
