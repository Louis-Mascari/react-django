import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/RecipeDetails.css";

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({
    id: 1,
    title: "chop suey",
    instructions:
      "Donec nec feugiat elit. Sed sit amet orci auctor, efficitur ipsum vel, tristique nunc. Duis dignissim arcu vitae mauris molestie, ut laoreet neque ornare. Duis ullamcorper finibus nisi, imperdiet pretium mauris posuere nec. Fusce ullamcorper sollicitudin scelerisque. Maecenas sed lorem mollis, luctus risus quis, dapibus ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla at lacus a arcu rhoncus pretium tempor quis magna. Suspendisse enim est, porta a orci non, consectetur sodales lacus. Integer euismod facilisis tristique. Integer id elementum ex, consectetur pretium eros. In facilisis tincidunt congue. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tincidunt purus vitae pellentesque tempor. Ut sit amet elit dictum, congue justo mollis, mattis nunc.",
  });
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   if (id) {
  //     fetch(`http://localhost:8000/recipes/${id}`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setRecipe(data);
  //         setLoading(false);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching recipe details:", error);
  //         setLoading(false);
  //       });
  //   }
  // }, []);

  return (
    <div className="recipe-details-div">
      {loading ? (
        <p>Loading...</p>
      ) : recipe ? (
        <>
          <h2>{recipe.title}</h2>
          <p>{recipe.instructions}</p>
          <button onClick={() => navigate("/")}>Back to Recipes</button>
        </>
      ) : (
        <p>Recipe not found</p>
      )}
    </div>
  );
};

export default RecipeDetails;
