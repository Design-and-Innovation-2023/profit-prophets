import React from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import Footer from './Footer';
import HomePage from './HomePage';
import Navbar from './Navbar';
import ProjectJourneyPage from './ProjectJourneyPage';
import ReflectionPage from './ReflectionPage';
import ProudMomentsPage from './ProudMomentsPage';
import AboutUsPage from './AboutUsPage';

const App: React.FC = () => {
  document.title = "Profit Prophets";
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project-journey" element={<ProjectJourneyPage />} />
        <Route path="/reflection" element={<ReflectionPage />} />
        <Route path="/proud-moments" element={<ProudMomentsPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
