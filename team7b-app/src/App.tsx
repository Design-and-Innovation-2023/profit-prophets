import React from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import Footer from './Footer';
import HomePage from './HomePage';
import Navbar from './Navbar';
import ProjectJourneyPage from './ProjectJourneyPage';
import ReflectionPage from './ReflectionPage';
import AchievementsPage from './AchievementsPage';
import AboutUsPage from './AboutUsPage';
import ScrollToTop from './ScrollToTop'; // Import the new component

const App: React.FC = () => {
  document.title = "Profit Prophets";

  return (
    <Router>
      <ScrollToTop />  {/* Add this line */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project-journey" element={<ProjectJourneyPage />} />
        <Route path="/reflection" element={<ReflectionPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
