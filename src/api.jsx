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

export async function ApiRegistration(person) {
  console.log("attendi risposta per...");
  console.log(person);
  let result = await axios.post(`http://localhost:8080/api/v1/auth/register`, {
    params: {
      email : person.email,
      password : person.password,
      firstname : person.firstname,
      lastname : person.lastname,
      dob : person.dob,
      weight : person.weight,
      height : person.height,
      sex : person.sex,
      work : person.work,
      diet : person.diet,
      physicalActivity : person.physicalActivity,
    },
  });
  console.log(result);
  return result.data;
}
