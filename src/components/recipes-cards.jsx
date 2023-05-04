import "/src/components-style/card.css";
import ShowCard from "./showCard";
import ApiRecipe from "../api";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

export async function loader({ request }) {
  const myNPage = 0;
  const myNRecipes = 9;
  //leggo la richesta fatta da nostro router
  const url = new URL(request.url);
  console.log(url);
  //leggo i parametri passati dalla richiesta/url
  const namePart = url.searchParams.get("inputRecipeName");
  const myDish = url.searchParams.get("myDish");
  //se i parametri letti non sono presenti nell'url saranno undefined(controllo poi fatto nel component api)
  const recipes = await ApiRecipe({ myDish, namePart, myNPage, myNRecipes });
  return { recipes };
}

export default function RecipesCards() {
  //leggo il risultato ritornato dal loader
  const { recipes } = useLoaderData();

  const navigate = useNavigate();

  const renderedCard = recipes.map((recipe) => {
    const handleClick = () => {
      console.log("handle click");
      navigate("/recipe", {od: recipe.id});
    }
    return (
      <Link className="divImage" key={recipe.id} to={`/recipe?od=${recipe.id}`}>
        <ShowCard recipe={recipe} />
      </Link>
    );
  });

  return <div className="div-cards">{renderedCard}</div>;
}
