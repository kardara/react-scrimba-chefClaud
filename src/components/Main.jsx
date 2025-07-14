import React, { useState } from "react";

function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const handleAddIngredient = () => {
    if (newIngredient.trim() !== "") {
      setIngredients([...ingredients, newIngredient]);
      setNewIngredient("");
    }
  };
  return (
    <>
      <main>
        <div>
          <input
            className="ingredient-input"
            type="text"
            placeholder="e.g. oregano"
            aria-label="Add ingredient"
            value={newIngredient}
            onChange={(e) => setNewIngredient(e.target.value)}
          />
          <button
            className="add-ingredient-button"
            onClick={handleAddIngredient}
          >
            + Add ingredient
          </button>
        </div>
        <div className="ingredient-list">
          <h1>Ingredients</h1>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

export default Main;
