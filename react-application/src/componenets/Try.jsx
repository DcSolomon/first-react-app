import React, { useState } from "react";

const Try = () => {
  const [car, setCar] = useState({ year: 2024, make: "BMW", model: "Latest" });

  function handleYearChange(event) {
    setCar((c) => ({ ...c, year: event.target.value }));
  }

  function handleMakeChange(event) {
    setCar((c) => ({ ...c, make: event.target.value }));
  }

  function handleModelChange(event) {
    setCar((c) => ({ ...c, model: event.target.value }));
  }

  return (
    <div>
      <p>
        My favourite car is: {car.year} {car.make} {car.model}
        <input type="number" value={car.year} onChange={handleYearChange} />
        <input type="text" value={car.make} onChange={handleMakeChange} />
        <input type="model" value={car.model} onChange={handleModelChange} />
      </p>
    </div>
  );
};

export default Try;
