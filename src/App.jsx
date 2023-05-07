import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>
        <h2>FOOTER</h2>
      </footer>
    </div>
  );
}
