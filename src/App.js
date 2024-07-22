import { Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./Components/Create";
import Read from "./Components/Read";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route exact path="/" element={<Read />}></Route>
        <Route exact path="/create" element={<Create />}></Route>
      </Routes>
    </div>
  );
}

export default App;
