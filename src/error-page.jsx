import "./error.css";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>
        Qualcosa è andato storto, prova a ricaricare la pagina o a tornare alla
        pagina precedente, se il problema persiste ci scusiamo per il disagio,
        verrà risolto al più presto.
      </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
