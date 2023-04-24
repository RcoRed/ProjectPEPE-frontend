import '/src/components-style/card.css'

function ShowCard({ recipe }) {
    return (
        <div className="divImage">
            <img src={recipe.imageFilePath}></img>
            <h2 className='title-card'>{recipe.name}</h2>
        </div>
    );
}
export default ShowCard;