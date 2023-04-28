import { useLoaderData } from "react-router-dom";
import Card from "./card";

export default function SearchRecipe() {
    console.log(useLoaderData());
    const { searchbarInput } = useLoaderData();
    console.log(searchbarInput);
    return (
        <>
        <div className="cards-div">
            <Card recipeName={searchbarInput} />
        </div>
        </>
    );
}