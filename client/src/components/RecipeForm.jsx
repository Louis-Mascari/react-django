import "../styles/RecipeForm.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const RecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [instructions, setInstructions] = useState("");
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (id) {
      setIsEditing(true);
      setLoading(true);
      fetch(`http://localhost:8000/recipes/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setName(data.name);
          setInstructions(data.instructions);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching recipe:", error);
          setLoading(false);
        });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const url = id
      ? `http://localhost:8000/recipes/${id}`
      : "http://localhost:8000/recipes";
    const method = id ? "PUT" : "POST";

    fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, instructions }),
    })
      .then((response) => response.json())
      .then(() => {
        setName("");
        setInstructions("");
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error submitting recipe:", error);
        setLoading(false);
      });
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleInstructionsChange = (e) => {
    setInstructions(e.target.value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="recipe"
        value={name}
        onChange={handleNameChange}
        placeholder="Recipe..."
        disabled={loading}
        required
      />
      <textarea
        name="instructions"
        value={instructions}
        onChange={handleInstructionsChange}
        placeholder="Instructions..."
        disabled={loading}
        rows={10}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? "Loading..." : isEditing ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default RecipeForm;
