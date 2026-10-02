import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Atividades from "./pages/Atividades";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/atividades" element={<Atividades />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;