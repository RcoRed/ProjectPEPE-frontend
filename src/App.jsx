import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/header";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeUser } from "./store";

export default function App() {
  const { state } = useLocation();
  const [user, setUser] = useState(state);
  const dispatch = useDispatch();

  const saveMyUser = () => {
    console.log(user);
    dispatch(changeUser(user));
  }

  saveMyUser();
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
