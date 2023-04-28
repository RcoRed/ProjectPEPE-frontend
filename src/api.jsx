import axios from "axios";
import { useState } from "react";

export default async function ApiRecipe({ myDish, namePart }) {
  console.log("sono dentro");
  console.log(namePart);
  let result = await axios.get(`http://localhost:8080/api/recipe`, {
    params: {
      dish: myDish,
      recipeName: namePart,
    },
  });
  console.log(result);
  return result.data;
}
