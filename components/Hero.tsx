import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { PORTFOLIO_DATA, ANIMATION_VARIANTS } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Background decorative blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-400/30 dark:bg-purple-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-400/30 dark:bg-blue-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-indigo-400/30 dark:bg-indigo-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      <motion.div 
        className="max-w-4xl mx-auto text-center relative z-10"
        variants={ANIMATION_VARIANTS.container}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={ANIMATION_VARIANTS.item} className="mb-4">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100/50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-sm font-medium backdrop-blur-sm">
            Hello, I'm
          </span>
        </motion.div>
        
        <motion.h1 
          variants={ANIMATION_VARIANTS.item}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 dark:text-white"
        >
          {PORTFOLIO_DATA.hero.name}
        </motion.h1>
        
        <motion.h2 
          variants={ANIMATION_VARIANTS.item}
          className="text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-300 mb-6"
        >
          {PORTFOLIO_DATA.hero.role}
        </motion.h2>
        
        <motion.p 
          variants={ANIMATION_VARIANTS.item}
          className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {PORTFOLIO_DATA.hero.tagline}
        </motion.p>
        
        <motion.div 
          variants={ANIMATION_VARIANTS.item}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#projects"
            className="group relative px-8 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium overflow-hidden shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
          >
            <span className="relative z-10">View Projects</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
            {/* Re-render text to stay above gradient on hover */}
            <span className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 text-white">
              View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          
          <a 
            href="#contact"
            className="px-8 py-3 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-medium hover:bg-white/80 dark:hover:bg-slate-700/80 transition-all flex items-center gap-2 shadow-sm"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};