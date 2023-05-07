import { ApiFullRecipe } from "../api";
import { useLoaderData } from "react-router-dom";
import "/src/components-style/full-recipe.css";

export async function loader({ request }) {
  const url = new URL(request.url);
  let myId = url.searchParams.get("od");
  const recipe = await ApiFullRecipe({ myId });
  return { recipe };
}

export default function FullRecipe() {
  const { recipe } = useLoaderData();
  console.log(recipe);
  return (
    <section className="full-recipe-section">
      <div className="recipe-title-div">
        <h1 className="recipe-title-h1">{recipe.name}</h1>
      </div>
      <div className="div-wrap-info">
        <div className="div-image">
          <img src={recipe.imageFilePath} />
        </div>
        <section className="recipe-info">
          <div>
            <p>
              Da cucinare? <span className="span-info">{recipe.toCook}</span>
            </p>
          </div>
          <div>
            <p>
              Difficoltà: <span className="span-info">{recipe.difficulty}</span>
            </p>
          </div>
          <div>
            <p>
              Dieta: <span className="span-info">{recipe.diet}</span>
            </p>
          </div>
          <div>
            <p>
              Portata: <span className="span-info">{recipe.dish}</span>
            </p>
          </div>
          <div>
            <p>
              Tempo di preparazione:{" "}
              <span className="span-info">{recipe.totPreparationTime}m</span>
            </p>
          </div>
          <div>
            <p>
              Valori nutrizionali:{" "}
              <span className="span-info">
                {recipe.totNutritionalValue}kcal
              </span>
            </p>
          </div>
          <div>
            <p>
              Costo medio: <span className="span-info">{recipe.totalCost}</span>
            </p>
          </div>
        </section>
      </div>
      <div className="wrapper">
        <div>
          <h2 className="ingredient-title">
            {" "}
            {recipe.ingredients.length} Ingredienti
          </h2>
        </div>
        <div className="ingredients-div">
          {recipe.ingredients.map((ingredient, index) => (
            <p key={index} className="ingredient">
              {ingredient}
            </p>
          ))}
        </div>
      </div>
      <section className="section-description">
        <div>
          <h3 className="preparation-h3">Preparazione:</h3>
        </div>
        <div className="div-description">
          <p className="description">{recipe.description}</p>
        </div>
      </section>
    </section>
  );
}
