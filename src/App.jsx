import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ServiceDetailPage from "./pages/ServiceDetail.jsx";
// import Hero from "./components/Hero.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service/:id" element={<ServiceDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
