import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dentistry from "./Pages/Dentistry";
import Home from "./Pages/Home";
import Popup1 from "./Pages/Popup1";
import Popup2 from "./Pages/Popup2";
import Popup3 from "./Pages/Popup3";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dentistry" element={<Dentistry />} />
        <Route path="/register" element={<Popup1 />} />
        <Route path="/verify" element={<Popup2 />} />
        <Route path="/verified" element={<Popup3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
