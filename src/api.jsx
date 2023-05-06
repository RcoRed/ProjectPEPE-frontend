import axios from "axios";

//se arriveranno valori undefined allora il loro default sarà null (cioè cio che vogliamo)
export default async function ApiRecipe(
  {
    namePart = null,
    myDiet = null,
    myDifficulty = null,
    myToCook = null,
    myNRecipes = 12,
  },
  myDish = null,
  myNPage = 0
) {
  console.log("attendi risposta per...");
  let result = await axios.get(`http://localhost:8080/api/recipe`, {
    params: {
      dish: myDish,
      namePart: namePart,
      diet: myDiet,
      difficulty: myDifficulty,
      toCook: myToCook,
      nPage: myNPage,
      nRecipes: myNRecipes,
    },
  });
  console.log(result);
  return result.data;
}

export async function ApiRecipeAuth(
  {
    namePart = null,
    myDiet = null,
    myDifficulty = null,
    myToCook = null,
    myIdPerson = null,
    myNRecipes = 12,
  },
  myDish = null,
  myNPage = 0
) {
  console.log("attendi risposta per... auth");
  let result = await axios.get(`http://localhost:8080/api/v1/recipeauth`, {
    params: {
      dish: myDish,
      namePart: namePart,
      diet: myDiet,
      difficulty: myDifficulty,
      toCook: myToCook,
      idPerson: myIdPerson,
      nPage: myNPage,
      nRecipes: myNRecipes,
    },
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
  console.log(result);
  return result.data;
}

export async function ApiRegistration(person) {
  console.log("attendi risposta per...");
  const { data } = await axios.post(
    `http://localhost:8080/api/v1/auth/register`,
    {
      email: person.email,
      password: person.password,
      firstname: person.firstname,
      lastname: person.lastname,
      dob: person.dob,
      weight: person.weight,
      height: person.height,
      sex: person.sex,
      work: person.work,
      diet: person.diet,
      physicalActivity: person.physicalActivity,
    }
  );
  console.log(data);
  localStorage.setItem("token", data.accessToken);
  return data.person;
}

export async function ApiLogin(personLogin) {
  console.log("attendi risultato di...");
  const { data } = await axios.post(
    `http://localhost:8080/api/v1/auth/authenticate`,
    {
      email: personLogin.email,
      password: personLogin.password,
    }
  );
  console.log(data);
  localStorage.setItem("token", data.accessToken);
  return data.person;
}

export async function ApiFullRecipe({ myId }) {
  console.log("attendi risultato di...");
  let { data } = await axios.get(`http://localhost:8080/api/recipe/${myId}`);
  console.log(data);
  return data;
}

export async function GetPerson({ userId }) {
  console.log("attendi risultato di...");
  let { data } = await axios.get(`http://localhost:8080/api/person/${userId}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
  console.log(data);
  return data;
}
