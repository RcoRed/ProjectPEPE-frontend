import "/src/components-style/card.css";
import ShowCard from "./showCard";
import ApiRecipe, { ApiRecipeAuth } from "../api";
import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchParams } from "../store";

//il loader non riesco a sostituirlo perche mi serve che ci sia uno useEffect (ad esempio) che parta ogni volta
//che viene fatta la richiesta di questa pagina (NON ogni volta che si aggiorna il component)
//se lo useEffect asoltasse lo stato del redux, ad ogni suo cambiamento eseguirebbe e si vengono a crerare bug,
//in più farebbe una "query" ogni volta che viene cambiato lo stato...
export async function loader({ request }) {
  //leggo la richesta fatta da nostro router
  const url = new URL(request.url);
  console.log(url);
  //leggo i parametri passati dalla richiesta/url
  const namePart = url.searchParams.get("inputRecipeName");
  const myToCook = url.searchParams.get("to-cook");
  const myDifficulty = url.searchParams.get("difficulty");
  const myDiet = url.searchParams.get("diet");
  const myIdPerson = url.searchParams.get("personal-filter");
  // const recipes = await ApiRecipe({
  //   myDish,
  //   namePart,
  //   myToCook,
  //   myDifficulty,
  //   myDiet,
  // });
  //se i parametri letti non sono presenti nell'url saranno undefined(controllo poi fatto nel component api)
  return [
    { namePart, myToCook, myDifficulty, myDiet, myIdPerson },
    url.pathname,
  ];
}

export default function RecipesCards() {
  //leggo il risultato ritornato dal loader
  const [params, pathname] = useLoaderData();
  const [recipes, setRecipes] = useState([]);
  const dispatch = useDispatch();

  const { myDish, searchParams } = useSelector((state) => {
    return {
      myDish: state.searchParams.myDish,
      searchParams: state.searchParams.searchParams,
    };
  });

  async function loadRecipes() {
    if (params.myIdPerson) {
      //controllo necessario
      if (pathname == "/") {
        //se la richiesta arriva da "/" allora arriva dalla form e posso passare params perchè il loader ha letto i dati dalla richiesta
        //poi aggiorno lo stato del redux
        dispatch(changeSearchParams(params));
        setRecipes(await ApiRecipeAuth(params, myDish));
      } else {
        //se la richesta non arriva da "/" cioè non dal form allora devo passare lo stato del redux
        //perche il loader non ha potuto caricare i dati necessari per parms, quindi utilizzo i dati che ho salvato nel redux
        setRecipes(await ApiRecipeAuth(searchParams, myDish));
      }
    } else {
      //controllo necessario
      if (pathname == "/") {
        //se la richiesta arriva da "/" allora arriva dalla form e posso passare params perchè il loader ha letto i dati dalla richiesta
        //poi aggiorno lo stato del redux
        dispatch(changeSearchParams(params));
        setRecipes(await ApiRecipe(params, myDish));
      } else {
        //se la richesta non arriva da "/" cioè non dal form allora devo passare lo stato del redux
        //perche il loader non ha potuto caricare i dati necessari per parms, quindi utilizzo i dati che ho salvato nel redux
        setRecipes(await ApiRecipe(searchParams, myDish));
      }
    }
    //faccio questi controlli perchè se faccio l'aggiornamento nello useEffect (if commentato) aggiorna lo stato del redux
    //ma all'api passa lo stato precedente del redux (non so perchè...) infatti se poi si continuasse la navigazione
    //è come se fossimo una sempre una ricerca indietro
  }

  //esegue ogni volta che carica la pagina (ascolta il loader)
  useEffect(() => {
    // if (pathname == "/") {
    //   console.log("sostituito");
    //   dispatch(changeSearchParams(params));
    // }
    loadRecipes();
  }, [params]);

  const renderedCard = recipes.map((recipe) => {
    return (
      <Link className="divImage" key={recipe.id} to={`/recipe?od=${recipe.id}`}>
        <ShowCard recipe={recipe} />
      </Link>
    );
  });

  return <div className="div-cards">{renderedCard}</div>;
}
