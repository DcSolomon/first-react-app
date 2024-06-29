import React from "react";

const List = () => {
  const fruits = [
    {
      id: 1,
      name: "Apple",
      calories: 93,
    },
    {
      id: 2,
      name: "Banana",
      calories: 105,
    },
    {
      id: 3,
      name: "Watermelon",
      calories: 61,
    },
    {
      id: 4,
      name: "Mamgo",
      calories: 121,
    },
  ];

  const newFruits = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: &nbsp; <b>{fruit.calories}</b>
    </li>
  ));

  return (
    <div>
      <ol>{newFruits}</ol>
    </div>
  );
};

export default List;
