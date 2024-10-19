import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Qualifications from "./pages/Qualifications";
import ExperienceList from "./pages/ExperienceList";
import Experience from "./pages/Experience";
import Hireme from "./pages/Hireme";

const App = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qualifications" element={<Qualifications />} />
        <Route path="/experience" element={<ExperienceList />} />
        <Route path="/experience/:id" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<Project />} />
        <Route path="/hire-me" element={<Hireme />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
