import { Form, redirect} from "react-router-dom";
import "/src/components-style/searchbar.css";
import { useState } from "react";

export default function Searchbar() {
  const [namePart, setNamePart] = useState("");
  const loadCards = () => {
    redirect("/");
  };

  const handleChange = (event) => {
    setNamePart(event.target.value);
  };

  return (
    <Form className="searchbar" role="search" onSubmit={loadCards}>
      <input
        id="inputName"
        name="inputName"
        defaultValue={namePart}
        type="search"
        placeholder="Cerca una ricetta..."
        aria-label="Search recipes"
        onChange={handleChange}
      />
    </Form>
  );
}
