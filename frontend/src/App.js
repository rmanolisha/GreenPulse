import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Policies from "./pages/Policies";
import Apply from "./pages/Apply";
import Datasets from "./pages/Datasets";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/datasets" element={<Datasets />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
