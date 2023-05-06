import { Form, redirect, useNavigate } from "react-router-dom";
import "/src/components-style/registration-form.css";
import { ApiRegistration } from "../api";
import { useDispatch } from "react-redux";
import { changeUser } from "../store";

function RegistrationForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function addUser(data) {
    dispatch(changeUser(data));
  }

  const sendRegistrationRequest = async (event) => {
    event.preventDefault();
    const person = {
      firstname: document.querySelector("#firstname").value,
      lastname: document.querySelector("#lastname").value,
      dob: document.querySelector("#dob").value,
      sex: document.querySelector("#sex").value,
      height: document.querySelector("#height").value,
      weight: document.querySelector("#weight").value,
      work: document.querySelector("#work").value,
      diet: document.querySelector("#diet").value,
      physicalActivity: document.querySelector("#physical-activity").value,
      email: document.querySelector("#email").value,
      password: document.querySelector("#password").value,
    };
    const data = await ApiRegistration(person);
    addUser(data);
    navigate("/");
  };

  return (
    <div className="registration-container">
      <Form
        method="POST"
        onSubmit={sendRegistrationRequest}
        className="registration-form"
      >
        <div className="separator">
          <div className="registration-input-div">
            <label htmlFor="firstname">Nome</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Nome"
              className="input-text"
            ></input>
          </div>
          <div className="registration-input-div">
            <label htmlFor="lastname">Cognome</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Cognome"
              className="input-text"
            ></input>
          </div>
        </div>
        <div className="separator">
          <div className="registration-input-div center-div">
            <label htmlFor="dob">Data di nascita</label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="input-date"
            ></input>
          </div>
          <div className="registration-input-div center-div">
            <label htmlFor="sex">Sesso</label>
            <select name="sex" id="sex">
              <option value="MALE">Uomo</option>
              <option value="FEMALE">Donna</option>
              <option value="UNDEFINED">Altro</option>
            </select>
          </div>
        </div>
        <div className="separator">
          <div className="registration-input-div">
            <label htmlFor="height">Altezza</label>
            <input
              type="number"
              id="height"
              name="height"
              min={50}
              placeholder="Altezza (CM)"
              className="input-text"
            ></input>
          </div>
          <div className="registration-input-div">
            <label htmlFor="weight">Peso</label>
            <input
              type="number"
              step="0.1"
              id="weight"
              name="weight"
              min={30}
              placeholder="Peso (Kg)"
              className="input-text"
            ></input>
          </div>
        </div>
        <div className="separator space-div">
          <div className="registration-input-div center-div">
            <label htmlFor="work">Tipo di Lavoro</label>
            <select name="work" id="work">
              <option value="SEDENTARY">Sedentario</option>
              <option value="ACTIVE">Attivo</option>
              <option value="VERY_ACTIVE">Molto Attivo</option>
            </select>
          </div>
          <div className="registration-input-div center-div">
            <label htmlFor="diet">Dieta</label>
            <select name="diet" id="diet">
              <option value="OMNIVOROUS">Tutto</option>
              <option value="VEGETARIAN">Vegetariana</option>
              <option value="VEGAN">Vegana</option>
            </select>
          </div>
          <div className="registration-input-div center-div">
            <label htmlFor="physical-activity">Attività Fisica</label>
            <select name="physical-activity" id="physical-activity">
              <option value="LOW">Poca</option>
              <option value="NORMAL">Media</option>
              <option value="HIGH">Molta</option>
            </select>
          </div>
        </div>
        <div className="registration-input-div">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example_pepe@email.com"
            className="input-text"
          ></input>
        </div>
        <div className="registration-input-div">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            className="input-text"
          ></input>
        </div>
        <div className="button-form">
          <button type="submit" className="registration-button">
            Registrati
          </button>
        </div>
      </Form>
    </div>
  );
}
export default RegistrationForm;
