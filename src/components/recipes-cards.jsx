import "/src/components-style/card.css";
import ShowCard from "./showCard";
import ApiRecipe, { ApiRecipeAuth } from "../api";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export async function loader({ request }) {
  const myNPage = 0;
  const myNRecipes = 9;
  //leggo la richesta fatta da nostro router
  const url = new URL(request.url);
  console.log(url);
  //leggo i parametri passati dalla richiesta/url
  let namePart = url.searchParams.get("inputRecipeName");
  let myDish = url.searchParams.get("myDish");
  let myToCook = url.searchParams.get("to-cook");
  let myDifficulty = url.searchParams.get("difficulty");
  let myDiet = url.searchParams.get("diet");
  let myId = url.searchParams.get("personal-filter");
  //se i parametri letti non sono presenti nell'url saranno undefined(controllo poi fatto nel component api)
  // const recipes = await ApiRecipe({ myDish, namePart, myToCook, myDifficulty, myDiet });
  return { myDish, namePart, myToCook, myDifficulty, myDiet, myId };
}

export default function RecipesCards({ request }) {
  console.log("RRRRRRRRRRRRRRRRRR" + request);
  const { user } = useSelector((state) => {
    return { user: state.user.myUser }
  })
  //leggo il risultato ritornato dal loader
  const searchParams = useLoaderData();

  const navigate = useNavigate();
  const [params, setParams] = useState(searchParams);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {searchRecipe()}, [params]);

  async function searchRecipe(){
    if(user){
      console.log("CIAO IUSER, SI, MI HAI SCOPERT. MA CHI TE L'HA DETTO?!?!?!?!" + user.id);
        setRecipes(await ApiRecipeAuth(params));
    } else{
        setRecipes(await ApiRecipe(params));
    }
  }

  const navigate = useNavigate();
  const [params, setParams] = useState(searchParams);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {searchRecipe()}, [params]);

  async function searchRecipe(){
    if(user){
      console.log("CIAO IUSER, SI, MI HAI SCOPERT. MA CHI TE L'HA DETTO?!?!?!?!" + user.id);
        setRecipes(await ApiRecipeAuth(params));
    } else{
        setRecipes(await ApiRecipe(params));
    }
  }

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
