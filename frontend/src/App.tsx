import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import Qualifications from "./pages/Qualifications";
import Experience from "./pages/Experience";
import Footer from "./components/Footer";
import Project from "./pages/Project";

const App = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qualifications" element={<Qualifications />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
