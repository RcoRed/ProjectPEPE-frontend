import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/header";
import { useState } from "react";

export default function App() {
  const { state } = useLocation();
  const [user, setUser] = useState(state);

  console.log(state);
  return (
    <div className="App">
      <Header user={user} />
      <main>
        <Outlet />
      </main>
      <footer>
        <h2>SONO IL FOOTER</h2>
      </footer>
    </div>
  );
}
