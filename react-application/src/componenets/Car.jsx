function Car() {
  const states = [
    {
      id: 1,
      Anambra: "Awka",
      Newyork: "Califonia",
      Abia: "Umuahia",
      Enugu: "Enugu",
    },

    {
      id: 2,
      Anambra2: "Awka2",
      Newyork2: "Califonia2",
      Abia2: "Umuahia2",
      Enugu2: "Enugu2",
    },
  ];

  return (
    <>
      <div>
        <h3>States and capitals</h3>
        <div>{states.map((state) => {})}</div>
      </div>
    </>
  );
}
export default Car;
