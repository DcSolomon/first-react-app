import React, { useState } from "react";

const ArrayState = () => {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function addCar() {
    const newCars = { year: carYear, make: carMake, model: carModel };
    setCars((c) => [...c, newCars]);

    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }
  function removeCar(index) {
    setCars(cars.filter((_, i) => i !== index));
  }

  function handleCarYear(event) {
    setCarYear(event.target.value);
  }

  function handleCarMake(event) {
    setCarMake(event.target.value);
  }

  function handleCarModel(event) {
    setCarModel(event.target.value);
  }

  return (
    <div>
      <h2>List of car objects</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => removeCar(index)}>
            {car.year} {car.make} {car.model}
          </li>
        ))}
      </ul>
      <input type="number" value={carYear} onChange={handleCarYear} />
      <input
        type="text"
        value={carMake}
        onChange={handleCarMake}
        placeholder="Enter car make"
      />
      <input
        type="text"
        value={carModel}
        onChange={handleCarModel}
        placeholder="Enter car model"
      />
      <button onClick={addCar}>Add Cars</button>
    </div>
  );
};

export default ArrayState;
