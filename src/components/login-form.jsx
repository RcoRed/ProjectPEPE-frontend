import { Form, Link, useNavigate } from "react-router-dom";
import "/src/components-style/login-form.css";
import { ApiLogin } from "../api";
function LoginForm() {
  const navigate = useNavigate();

  const sendLoginRequest = async (event) => {
    event.preventDefault();
    const personLogin = {
      email: document.querySelector("#email").value,
      password: document.querySelector("#password").value,
    };
    const data = await ApiLogin(personLogin);
    console.log(data);
    navigate("/", { state: data });
  };

  return (
    <div className="container">
      <Form method="POST" className="login-form" onSubmit={sendLoginRequest}>
        <div className="input-div">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example_pepe@email.com"
            className="input-text"
          ></input>
        </div>
        <div className="input-div">
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
          <button type="submit" className="button-login">
            Accedi
          </button>
        </div>
      </Form>
      <div className="registration-link">
        <Link to={"/register"}>Se non hai un account registrati </Link>
      </div>
    </div>
  );
}
export default LoginForm;
