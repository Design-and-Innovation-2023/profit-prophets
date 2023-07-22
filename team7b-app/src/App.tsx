import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ProjectJourneyPage from './ProjectJourneyPage';
import ReflectionPage from './ReflectionPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project-journey" element={<ProjectJourneyPage />} />
        <Route path="/reflection" element={<ReflectionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
