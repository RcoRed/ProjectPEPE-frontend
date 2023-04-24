import '/src/components-style/registration-form.css'

function RegistrationForm() {
    return (
        <div className='registration-container'>
            <form method="POST" className='registration-form'>
                <div className='separator'>
                    <div className="registration-input-div">
                        <label htmlFor="firstname">Nome</label>
                        <input type="text" name="firstname" placeholder="Nome"className="input-text"></input>
                    </div>
                    <div className="registration-input-div">
                        <label htmlFor="lastname">Cognome</label>
                        <input type="text" name="lastname" placeholder="Cognome"className="input-text"></input>
                    </div>
                </div>
                <div className='separator'>
                    <div className="registration-input-div center-div">
                        <label htmlFor="dob">Data di nascita</label>
                        <input type="date" name="dob" className="input-date"></input>
                    </div>
                    <div className="registration-input-div center-div">
                        <label htmlFor="sex">Sesso</label>
                        <select name="sex" id="sex">
                            <option value="m">Uomo</option>
                            <option value="f">Donna</option>
                            <option value="u">Altro</option>
                        </select>
                    </div>
                </div>
                <div className='separator'>
                    <div className="registration-input-div">
                        <label htmlFor="height">Altezza</label>
                        <input type="number" name="height" min={50} placeholder="Altezza (CM)"className="input-text"></input>
                    </div>
                    <div className="registration-input-div">
                        <label htmlFor="weight">Peso</label>
                        <input type="number" step="0.01" name="weight" min={30} placeholder="Peso (Kg)"className="input-text"></input>
                    </div>
                </div>
                <div className='separator space-div'>
                    <div className="registration-input-div center-div">
                        <label htmlFor="work">Tipo di Lavoro</label>
                        <select name="work" id="work">
                            <option value="s">Sedentario</option>
                            <option value="a">Attivo</option>
                            <option value="va">Molto Attivo</option>
                        </select>
                    </div>
                    <div className="registration-input-div center-div">
                        <label htmlFor="diet">Dieta</label>
                        <select name="diet" id="diet">
                            <option value="t">Tutto</option>
                            <option value="v">Vegetariana</option>
                            <option value="veg">Vegana</option>
                        </select>
                    </div>
                    <div className="registration-input-div center-div">
                        <label htmlFor="physical-activity">Attività Fisica</label>
                        <select name="physical-activity" id="physical-activity">
                            <option value="l">Poca</option>
                            <option value="n">Media</option>
                            <option value="h">Molta</option>
                        </select>
                    </div>
                </div>
                <div className="registration-input-div">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="example_pepe@email.com"className="input-text"></input>
                </div>
                <div className="registration-input-div">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="password"className="input-text"></input>
                </div>
                <div className="button-form">
                    <button type="submit" className='registration-button'>Registrati</button>
                </div>
            </form>
        </div>
    );

}
export default RegistrationForm;