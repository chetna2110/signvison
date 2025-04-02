import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './main.js';
import DeveloperPage from '../src/components/devpage/DevPage.jsx'
import AboutPage from '../src/components/pages/About.jsx';
import NotFoundPage from '../src/components/pages/NotFoundPage.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
