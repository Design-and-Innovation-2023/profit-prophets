import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './Footer';
import HomePage from './HomePage';
import Navbar from './Navbar';
import ProjectJourneyPage from './ProjectJourneyPage';
import ReflectionPage from './ReflectionPage';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project-journey" element={<ProjectJourneyPage />} />
        <Route path="/reflection" element={<ReflectionPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
