import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./modules/home/pages/Home";
import { Carousel } from "./modules/home/components/Carousel";
import { Login } from "./modules/home/components/admin/Login";
import Kuesioner from "./modules/home/components/kuesioner/kuesioner";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Home />} />
        <Route path="/Carousel" element={<Carousel />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/kuesioner/kuesioner" element={<Kuesioner />} />
      </Routes>
    </Router>
  );
};

export default App;
