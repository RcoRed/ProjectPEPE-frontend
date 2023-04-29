import "/src/components-style/card.css";
import ShowCard from "./showCard";
import ApiRecipe from "../api";
import { useLoaderData } from "react-router-dom";

export async function loader({ request }) {
  //leggo la richesta fatta da nostro router
  const url = new URL(request.url);
  console.log(url);
  //leggo i parametri passati dalla richiesta/url
  let namePart = url.searchParams.get("inputRecipeName");
  let myDish = url.searchParams.get("myDish");
  //se i parametri letti non sono presenti nell'url saranno undefined(controllo poi fatto nel component api)
  const recipes = await ApiRecipe({ myDish, namePart });
  return { recipes };
}

export default function RecipesCards() {
  //leggo il risultato ritornato dal loader
  const { recipes } = useLoaderData();

  const renderedCard = recipes.map((recipe) => {
    return (
      <div className="divImage" key={recipe.id}>
        <ShowCard recipe={recipe} />
      </div>
    );
  });

  return <div className="div-cards">{renderedCard}</div>;
}
