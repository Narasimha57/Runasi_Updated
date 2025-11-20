import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "./pages/Home.jsx";
import ServiceDetailPage from "./pages/ServiceDetail.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service/:id" element={<ServiceDetailPage />} />
      </Routes>
    </Router>
  );
}
