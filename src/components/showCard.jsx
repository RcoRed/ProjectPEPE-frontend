import "/src/components-style/card.css";

function ShowCard({ recipe }) {
  return (
    <>
      <img src={recipe.imageFilePath} alt={recipe.name}></img>
      <h2 className="title-card">{recipe.name}</h2>
    </>
  );
}
export default ShowCard;
