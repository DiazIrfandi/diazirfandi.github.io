import React from 'react';
import { PORTFOLIO_DATA } from '../constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 text-center relative z-10 border-t border-slate-200/50 dark:border-slate-800/50 mt-10">
      <p className="text-slate-500 dark:text-slate-400 text-sm">
        © {currentYear} {PORTFOLIO_DATA.hero.name}. All rights reserved.
      </p>
      <p className="text-slate-400 dark:text-slate-500 text-xs mt-2">
        Built with React, Tailwind CSS & Framer Motion.
      </p>
    </footer>
  );
};