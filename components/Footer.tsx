import React from 'react';
import { Link } from 'react-router-dom';
import { RoutePath } from '../types';
import { APP_NAME, CONTACT_EMAIL, GITHUB_LINK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-xl font-bold text-white">{APP_NAME}</span>
            <p className="text-gray-500 text-sm mt-2">© 2026 All rights reserved.</p>
          </div>
          
          <div className="flex flex-wrap gap-8 justify-center md:justify-end">
            <Link to={RoutePath.HOME} className="text-gray-400 hover:text-white transition-colors text-sm">Home</Link>
            <Link to={RoutePath.PRIVACY} className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</Link>
            <Link to={RoutePath.TERMS} className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</Link>
            <a href={GITHUB_LINK} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">GitHub</a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;