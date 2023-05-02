import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/header";

export default function App() {

  const {state} = useLocation();
  console.log(state);
  return (
    <div className="App">
      <Header state={state} /> 
      <main>
        <Outlet />
      </main>
      <footer>
        <h2>SONO IL FOOTER</h2>
      </footer>
    </div>
  );
}
