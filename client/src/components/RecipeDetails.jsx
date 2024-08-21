import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/RecipeDetails.css";

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8000/recipes/${id}/`)
        .then((response) => response.json())
        .then((data) => {
          setRecipe(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching recipe details:", error);
          setLoading(false);
        });
    }
  }, []);

  return (
    <div className="recipe-details-div">
      {loading ? (
        <p>Loading...</p>
      ) : recipe ? (
        <>
          <h2>{recipe.title}</h2>
          <pre>{recipe.instructions}</pre>
          <button onClick={() => navigate("/")}>Back to Recipes</button>
        </>
      ) : (
        <p>Recipe not found</p>
      )}
    </div>
  );
};

export default RecipeDetails;
