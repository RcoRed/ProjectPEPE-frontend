import axios from "axios"

async function ApiRecipe(){
    console.log("sono dentro");
    let result = await axios.get("http://localhost:8080/api/recipe");
    console.log(result);
    
        

}
export default ApiRecipe