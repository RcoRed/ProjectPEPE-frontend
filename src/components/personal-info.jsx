import { useLocation } from "react-router-dom";
import "/src/components-style/personal-info.css";
import { useState } from "react";

export default function PersonalInfo() {
  const { state } = useLocation();
  console.log(state);
  const [personState, setPerson] = useState(state);
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
