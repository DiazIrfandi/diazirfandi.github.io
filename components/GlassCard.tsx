import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = "", 
  hoverEffect = false,
  ...props 
}) => {
  const baseClasses = "bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/50 dark:border-slate-700/50 shadow-xl rounded-2xl overflow-hidden";
  const hoverClasses = hoverEffect ? "hover:bg-white/50 dark:hover:bg-slate-800/50 transition-colors duration-300" : "";

  return (
    <motion.div 
      className={`${baseClasses} ${hoverClasses} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};