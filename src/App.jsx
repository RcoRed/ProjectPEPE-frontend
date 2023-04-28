import "./App.css";
import Header from "./components/header";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>
        <h2>SONO IL FOOTER</h2>
      </footer>
    </div>
  );
}
