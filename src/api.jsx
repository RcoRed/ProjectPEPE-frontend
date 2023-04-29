import axios from "axios";

//se arriveranno valori undefined allora il loro default sarà null (cioè cio che vogliamo)
export default async function ApiRecipe({ myDish = null, namePart = null }) {
  console.log("attendi risposta per...");
  console.log(namePart);
  console.log(myDish);
  let result = await axios.get(`http://localhost:8080/api/recipe`, {
    params: {
      dish: myDish,
      recipeName: namePart,
    },
  });
  console.log(result);
  return result.data;
}
