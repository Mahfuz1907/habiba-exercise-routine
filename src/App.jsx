import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./assets/Components/Home/Home";
import WarmUp from "./assets/Components/Warm Up/WarmUp";
import LowerBody from "./assets/Components/LowerBody/LowerBody";
import Core from "./assets/Components/Core/Core";
import Upper from "./assets/Components/Upper/Upper";
import Flex from "./assets/Components/Flex/Flex";
import Cool from "./assets/Components/Cool/Cool";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/wp" element={<WarmUp />}></Route>
          <Route path="/lb" element={<LowerBody />}></Route>
          <Route path="/cr" element={<Core />}></Route>
          <Route path="/up" element={<Upper />}></Route>
          <Route path="/flex" element={<Flex />}></Route>
          <Route path="/cool" element={<Cool />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
