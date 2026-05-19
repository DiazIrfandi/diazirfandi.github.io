import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';
import { SectionHeading } from './SectionHeading';
import { PORTFOLIO_DATA, ANIMATION_VARIANTS } from '../constants';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={ANIMATION_VARIANTS.container}
        >
          <SectionHeading title="Technical Arsenal" subtitle="Technologies and tools I work with on a daily basis." />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.skills.map((skillGroup, index) => (
              <motion.div key={index} variants={ANIMATION_VARIANTS.item}>
                <GlassCard className="p-6 h-full" hoverEffect>
                  <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 pb-2">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1.5 text-sm font-medium rounded-lg bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-600/50 text-slate-700 dark:text-slate-300 shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};