import { Form, redirect, useSubmit } from "react-router-dom";
import "/src/components-style/searchbar.css";
import { useState } from "react";

export default function Searchbar({ user }) {
  const [namePart, setNamePart] = useState("");

  const loadCards = () => {
    //semplice redirect che come parametri avrà quello del form inviato (method GET)
    redirect("/");
  };

  const submit = useSubmit();

  const handleChange = (event) => {
    setNamePart(event.target.value);
  };

  return (
    <Form
      className="searchbar"
      role="search"
      onSubmit={(event) => {
        submit(event.currentTarget.form, {
          action: "/",
        });
      }}
    >
      <input
        id="inputRecipeName"
        name="inputRecipeName"
        defaultValue={namePart}
        type="search"
        placeholder="Cerca una ricetta..."
        aria-label="Search recipes"
        onChange={handleChange}
      />
      {user && (
        <>
          <div className="div-wrap-filter auth">
            <label className="label-filter" htmlFor="can-cook">
              Filtro personale
            </label>
            <select
              className="filter-select select-auth"
              name="can-cook"
              onChange={(event) => {
                submit(event.currentTarget.form, {
                  action: "/",
                });
              }}
            >
              <option value="">Nessuno</option>
              <option value="can-cook">Cosa posso cucinare</option>
              <option value="avoiding-food">In base ai gusti</option>
            </select>
          </div>
        </>
      )}
      <div className="div-filters">
        <div className="div-wrap-filter">
          <label className="label-filter" htmlFor="diet">
            Dieta
          </label>
          <select
            className="filter-select"
            name="diet"
            onChange={(event) => {
              submit(event.currentTarget.form, {
                action: "/",
              });
            }}
          >
            <option value="">Tutti</option>
            <option value="VEGETARIAN">Vegetariana</option>
            <option value="VEGAN">Vegana</option>
          </select>
        </div>
        <div className="div-wrap-filter">
          <label className="label-filter" htmlFor="difficulty">
            Difficoltà
          </label>
          <select
            className="filter-select"
            name="difficulty"
            onChange={(event) => {
              submit(event.currentTarget.form, {
                action: "/",
              });
            }}
          >
            <option value="">Tutti</option>
            <option value="LOW">Bassa</option>
            <option value="MEDIUM">Media</option>
            <option value="HIGH">Alta</option>
          </select>
        </div>
        <div className="div-wrap-filter">
          <label className="label-filter" htmlFor="to-cook">
            Da cucinare?
          </label>
          <select
            className="filter-select"
            name="to-cook"
            onChange={(event) => {
              submit(event.currentTarget.form, {
                action: "/",
              });
            }}
          >
            <option value="">Tutti</option>
            <option value="true">Sì</option>
            <option value="false">No</option>
          </select>
        </div>
      </div>
    </Form>
  );
}
