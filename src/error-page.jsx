import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Whee WAJòòòò!! Questa è una pagina di errore! Mannag a san gennar.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
