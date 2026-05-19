import React from 'react';
import { motion } from 'framer-motion';
import { ANIMATION_VARIANTS } from '../constants';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <motion.div 
      variants={ANIMATION_VARIANTS.item}
      className="mb-12 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 inline-block">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full opacity-50"></div>
    </motion.div>
  );
};