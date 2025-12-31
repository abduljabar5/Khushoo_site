import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import { RoutePath } from './types';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-khushoo-dark text-white font-sans selection:bg-khushoo-primary selection:text-black">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path={RoutePath.HOME} element={<Home />} />
            <Route path={RoutePath.PRIVACY} element={<Privacy />} />
            <Route path={RoutePath.TERMS} element={<Terms />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;