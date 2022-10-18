import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dentistry from "./Pages/Dentistry";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dentistry" element={<Dentistry />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
