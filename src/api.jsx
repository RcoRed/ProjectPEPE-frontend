import axios from "axios"

const apiRecipe = async (dish, recipeName) =>{
    console.log("sono dentro");
    let result = await axios.get(`http://localhost:8080/api/recipe`, {
        params: {
            dish: dish,
            recipeName: recipeName,
        }
    });

    console.log(result);
    return result.data;


}
export default apiRecipe