import "/src/components-style/card.css";
import ShowCard from "./showCard";
import ApiRecipe, { ApiRecipeAuth } from "../api";
import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

export async function loader({ request }) {
  //leggo la richesta fatta da nostro router
  const url = new URL(request.url);
  console.log(url);
  //leggo i parametri passati dalla richiesta/url
  const namePart = url.searchParams.get("inputRecipeName");
  const myDish = url.searchParams.get("myDish");
  const myToCook = url.searchParams.get("to-cook");
  const myDifficulty = url.searchParams.get("difficulty");
  const myDiet = url.searchParams.get("diet");
  const myIdPerson = url.searchParams.get("personal-filter");
  //se i parametri letti non sono presenti nell'url saranno undefined(controllo poi fatto nel component api)
  // const recipes = await ApiRecipe({
  //   myDish,
  //   namePart,
  //   myToCook,
  //   myDifficulty,
  //   myDiet,
  // });
  return { namePart, myDish, myToCook, myDifficulty, myDiet, myIdPerson };
}

export default function RecipesCards() {
  //leggo il risultato ritornato dal loader
  const searchParams = useLoaderData();
  const [recipes, setRecipes] = useState([]);

  async function loadRecipes() {
    if (searchParams.myIdPerson) {
      setRecipes(await ApiRecipeAuth(searchParams));
    } else {
      setRecipes(await ApiRecipe(searchParams));
    }
  }

  useEffect(() => {
    loadRecipes();
  }, [searchParams]);

  const renderedCard = recipes.map((recipe) => {
    return (
      <Link className="divImage" key={recipe.id} to={`/recipe?od=${recipe.id}`}>
        <ShowCard recipe={recipe} />
      </Link>
    );
  });

  return <div className="div-cards">{renderedCard}</div>;
}
