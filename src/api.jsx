import axios from "axios"

const apiRecipe = async (term) =>{
    console.log("sono dentro");
    let result = await axios.get(`http://localhost:8080/api/recipe`, {
        params: {
            dish: term,
        }
    });

    console.log(result);
    return result.data;


}
export default apiRecipe