import { useLoaderData } from "react-router-dom";
import Card from "./cards";
import Header from "./header";

export async function loader({ request }) {
  const url = new URL(request.url);
  const searchbarInput = url.searchParams.get("searchbarInput");
  return { searchbarInput };
}

export default function SearchRecipe() {
  const { searchbarInput } = useLoaderData();
  return (
    <>
      <Header />
      <div className="cards-div">
        <Card recipeName={searchbarInput} />
      </div>
    </>
  );
}
