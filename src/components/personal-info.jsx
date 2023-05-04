import { useLoaderData } from "react-router-dom";
import { GetPerson } from "../api";
import "/src/components-style/personal-info.css";
import { useState } from "react";

export async function loader({ request }) {
  //leggo la richesta fatta da nostro router
  const url = new URL(request.url);
  console.log(url);
  //leggo i parametri passati dalla richiesta/url
  const userId = url.searchParams.get("id");
  const person = await GetPerson({ userId });
  return { person };
}

export default function PersonalInfo() {
  const { person } = useLoaderData();
  const [personState, setPerson] = useState(person);
  console.log(person);
  return (
    <div className="div-info">
      <div className="div-info-separator">
        <div className="info-input-div">
          <label htmlFor="firstname">Nome</label>
          <p className="person-info">{personState.firstname}</p>
        </div>
        <div className="info-input-div">
          <label htmlFor="lastname">Cognome</label>
          <p className="person-info">{personState.lastname}</p>
        </div>
      </div>
      <div className="div-info-separator">
        <div className="info-input-div">
          <label htmlFor="dob">Data di nascita</label>
          <p className="person-info">{personState.dob}</p>
        </div>
        <div className="info-input-div">
          <label htmlFor="sex">Sesso</label>
          <p className="person-info">{personState.sex}</p>
        </div>
      </div>
      <div className="div-info-separator">
        <div className="info-input-div">
          <label htmlFor="height">Altezza</label>
          <p className="person-info">{personState.height}</p>
        </div>
        <div className="info-input-div">
          <label htmlFor="weight">Peso</label>
          <p className="person-info">{personState.weight}</p>
        </div>
      </div>
      <div className="div-info-separator">
        <div className="info-input-div">
          <label htmlFor="work">Tipo di Lavoro</label>
          <p className="person-info">{personState.work}</p>
        </div>
        <div className="info-input-div">
          <label htmlFor="diet">Dieta</label>
          <p className="person-info">{personState.diet}</p>
        </div>
        <div className="info-input-div">
          <label htmlFor="physical-activity">Attività Fisica</label>
          <p className="person-info">{personState.physicalActivity}</p>
        </div>
      </div>
      <div className="div-info-separator">
        <div className="info-input-div">
          <label htmlFor="email">Email</label>
          <p className="person-info">{personState.email}</p>
        </div>
      </div>
    </div>
  );
}
