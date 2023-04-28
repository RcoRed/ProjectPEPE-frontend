import "/src/components-style/card.css";
import ShowCard from "./showCard";
import ApiRecipe from "../api";
import { useLoaderData, useParams } from "react-router-dom";

export async function loader({ request }) {
  const url = new URL(request.url);
  console.log(url);
  console.log("lo faccio giuro!!");
  let namePart = url.searchParams.get("inputName");
  let myDish = url.searchParams.get("myDish");
  if (!namePart) {
    namePart = "";
  }
  if (!myDish) {
    myDish = "";
  }
  const recipes = await ApiRecipe({ namePart });
  return { recipes };
}

export default function Cards() {
  const { recipes } = useLoaderData();

  const renderedCard = recipes.map((recipe) => {
    return (
      <div key={recipe.id}>
        <ShowCard recipe={recipe} />
      </div>
    );
  });

  return <div className="div-cards">{renderedCard}</div>;
}
