import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { CustomProjectsPage } from "./pages/CustomProjectsPage";
import { ProductionProjectsPage } from "./pages/ProductionProjectsPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { CompetitionPage } from "./pages/CompetitionPage";
import { ContactPage } from "./pages/ContactPage";
import { FeaturedProjectPage } from "./pages/FeaturedProjectPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    setIsLoaded(true);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className={`min-h-screen bg-background flex flex-col ${isLoaded ? 'fade-in' : ''}`} style={!isLoaded ? { opacity: 0 } : undefined}>
        <Header />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/custom" element={<CustomProjectsPage />} />
            <Route path="/projects/production" element={<ProductionProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
            <Route path="/competition" element={<CompetitionPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/featured-project" element={<FeaturedProjectPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}