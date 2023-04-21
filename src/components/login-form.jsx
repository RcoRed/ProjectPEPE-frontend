import { Link } from "react-router-dom";

function LoginForm() {
    return (
        <>
            <form method="GET">
                <div className="input-div">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="example_pepe@email.com" className="input-text"></input>
                </div>
                <div className="input-div">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="password" className="input-text"></input>
                </div>
                <div className="button-form">
                    <button type="submit">Accedi</button>
                </div>
            </form>
            <div className="registration-link">
                <Link to={"/register"}>Se non hai un account registrati </Link>
            </div>
        </>
    );

}
export default LoginForm;