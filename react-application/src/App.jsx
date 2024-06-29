import { Route, Routes } from "react-router-dom";
import MyComponent from "./componenets/MyComponent";
import Counter from "./componenets/Counter";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Counter">Counter</a>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<MyComponent />} />
        <Route path="/Counter" element={<Counter />} />
      </Routes>
    </>
  );
}

export default App;
