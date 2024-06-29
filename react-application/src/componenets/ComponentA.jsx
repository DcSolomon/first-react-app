import React, { useState, createContext } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();

const ComponentA = () => {
  const [user, setUser] = useState("Nnabuife");

  return (
    <div className="box">
      <h1>ComponenetA</h1>
      <h2>{`Hello ${user}`}</h2>
      <UserContext.Provider value={user}>
        <ComponentB user={user} />
      </UserContext.Provider>
    </div>
  );
};

export default ComponentA;
