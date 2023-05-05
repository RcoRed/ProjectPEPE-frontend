import "/src/components-style/personal-info.css";
import { useSelector } from "react-redux";

export default function PersonalInfo() {
  const { user } = useSelector((state) => {
    return {
      user: state.user.user,
    };
  });

  return (
    <div className="div-info">
      <div className="div-info-separator">
        <div className="info-input-div">
          <label htmlFor="firstname">Nome</label>
          <p className="person-info">{user.firstname}</p>
        </div>
        <div className="info-input-div">
          <label htmlFor="lastname">Cognome</label>
          <p className="person-info">{user.lastname}</p>
        </div>
      </div>
      <div className="div-info-separator">
        <div className="info-input-div">
          <label htmlFor="dob">Data di nascita</label>
          <p className="person-info">{user.dob}</p>
        </div>
        <div className="info-input-div">
          <label htmlFor="sex">Sesso</label>
          <p className="person-info">{user.sex}</p>
        </div>
      </div>
      <div className="div-info-separator">
        <div className="info-input-div">
          <label htmlFor="height">Altezza</label>
          <p className="person-info">{user.height}</p>
        </div>
        <div className="info-input-div">
          <label htmlFor="weight">Peso</label>
          <p className="person-info">{user.weight}</p>
        </div>
      </div>
      <div className="div-info-separator">
        <div className="info-input-div">
          <label htmlFor="work">Tipo di Lavoro</label>
          <p className="person-info">{user.work}</p>
        </div>
        <div className="info-input-div">
          <label htmlFor="diet">Dieta</label>
          <p className="person-info">{user.diet}</p>
        </div>
        <div className="info-input-div">
          <label htmlFor="physical-activity">Attività Fisica</label>
          <p className="person-info">{user.physicalActivity}</p>
        </div>
      </div>
      <div className="div-info-separator">
        <div className="info-input-div">
          <label htmlFor="email">Email</label>
          <p className="person-info">{user.email}</p>
        </div>
      </div>
    </div>
  );
}
