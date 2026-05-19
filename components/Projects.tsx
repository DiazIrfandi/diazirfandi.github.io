import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Server, ExternalLink } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { SectionHeading } from './SectionHeading';
import { PORTFOLIO_DATA, ANIMATION_VARIANTS } from '../constants';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Code': return <Code className="w-6 h-6" />;
    case 'Terminal': return <Terminal className="w-6 h-6" />;
    case 'Server': return <Server className="w-6 h-6" />;
    default: return <Code className="w-6 h-6" />;
  }
};

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={ANIMATION_VARIANTS.container}
        >
          <SectionHeading title="Featured Projects" subtitle="A selection of my recent work in backend development and infrastructure." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_DATA.projects.map((project) => (
              <motion.div key={project.id} variants={ANIMATION_VARIANTS.item} className="h-full">
                <GlassCard 
                  className="p-6 h-full flex flex-col relative group"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 shadow-inner">
                    {getIcon(project.icon)}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-200/50 dark:border-slate-700/50">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Subtle hover overlay effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/20 dark:group-hover:border-blue-400/20 rounded-2xl transition-colors pointer-events-none"></div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};