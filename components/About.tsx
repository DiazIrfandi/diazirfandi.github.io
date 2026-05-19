import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';
import { SectionHeading } from './SectionHeading';
import { PORTFOLIO_DATA, ANIMATION_VARIANTS } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={ANIMATION_VARIANTS.container}
        >
          <SectionHeading title="About Me" />

          <motion.div variants={ANIMATION_VARIANTS.slideUp}>
            <GlassCard className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 rounded-full overflow-hidden border-4 border-white/50 dark:border-slate-700/50 shadow-xl">
                  {/* Placeholder for profile image */}
                  <img
                    src="/me.png"
                    alt="Ahmad Habib Diaz Irfandi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                    {PORTFOLIO_DATA.about.bio}
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};