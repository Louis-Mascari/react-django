import "../styles/RecipeList.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/recipes/")
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching recipes: ", error);
        setLoading(false);
      });
  }, []);

  const handleEdit = (event, id) => {
    event.stopPropagation();
    navigate(`edit/${id}`);
  };

  const handleDelete = (event, recipe) => {
    event.stopPropagation();
    const userChoice = confirm(
      `Are you sure you want to delete ${recipe.title}? This is irreversible.`,
    );

    if (userChoice === true) {
      setLoading(true);
      fetch(`http://localhost:8000/recipes/${recipe.id}/`, {
        method: "DELETE",
      })
        .then(() => {
          setRecipes(recipes.filter((r) => r.id !== recipe.id));
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error deleting recipe: ", error);
          setLoading(false);
        });
    }
  };

  const handleClick = (id) => {
    navigate(`recipes/${id}`);
  };

  return (
    <div className="list-div">
      <h2>Recipes</h2>
      {loading ? (
        <p>Loading...</p>
      ) : recipes.length > 0 ? (
        <div className="recipes-div">
          <ul>
            {recipes.map((recipe) => {
              return (
                <li key={recipe.id} onClick={() => handleClick(recipe.id)}>
                  {recipe.title}
                  <div className="recipe-buttons">
                    <button
                      className="edit-button"
                      onClick={(event) => handleEdit(event, recipe.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-button"
                      onClick={(event) => handleDelete(event, recipe)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className="empty-recipes-div">
          <p>No recipes yet...</p>
          <button onClick={() => navigate("/add")}>Add Recipe</button>
        </div>
      )}
    </div>
  );
};

export default RecipeList;
