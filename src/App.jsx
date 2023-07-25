import "./App.css";
import { Route, Routes } from "react-router-dom";
import Income from "./components/Income";
import Nav from "./components/Nav";
import Expenses from "./components/Expenses";

function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Income></Income>}></Route>
        <Route path="/expenses" element={<Expenses></Expenses>}></Route>
      </Routes>
    </>
  );
}

export default App;
