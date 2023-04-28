import { redirect, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ApiRecipe from "../api";
import ShowCard from "./showCard";

export default function RecipeRedirect() {
  const [recipes, setRecipes] = useState([]);
  let { myDish } = useParams();

  async function loader(myDish) {
    const result = await ApiRecipe({ myDish });
    setRecipes(result);
  }

  useEffect(() => {
    myDish = myDish.toUpperCase();
    loader(myDish);
  }, []);

  const renderedCard = recipes.map((recipe) => {
    return (
      <div key={recipe.id}>
        <ShowCard recipe={recipe} />
      </div>
    );
  });

  return <div className="div-cards">{renderedCard}</div>;
}
