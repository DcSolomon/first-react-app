import React, { useState } from "react";

const Practice = () => {
  const [foods, setFoods] = useState(["Apple", "Orange", "Babana"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    setFoods((f) => [...f, newFood]);
  }

  function handleRemoveFood(index) {
    setFoods(foods.filter((element, i) => i !== index));
  }

  return (
    <div>
      <h2>List of Fruits</h2>
      {foods.map((food, index) => (
        <li key={index} onClick={() => handleRemoveFood(index)}>
          {food}
        </li>
      ))}
      <input type="text" id="foodInput" placeholder="Enter fruit name" />

      <button onClick={handleAddFood}>Add Fruits</button>
    </div>
  );
};

export default Practice;
