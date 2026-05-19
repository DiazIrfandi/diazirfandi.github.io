import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { SectionHeading } from './SectionHeading';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PORTFOLIO_DATA, ANIMATION_VARIANTS } from '../constants';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormState({ name: '', email: '', message: '' });
      alert("Message sent successfully! (Simulation)");
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={ANIMATION_VARIANTS.container}
        >
          <SectionHeading title="Get In Touch" subtitle="Have a project in mind or want to discuss infrastructure? Let's talk." />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <motion.div variants={ANIMATION_VARIANTS.item} className="md:col-span-2 flex flex-col gap-6">
              <GlassCard className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-6 text-slate-800 dark:text-slate-200">Contact Information</h3>
                
                <div className="space-y-6">
                  <a href={`mailto:${PORTFOLIO_DATA.contact.email}`} className="flex items-center gap-4 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-white/50 dark:bg-slate-800/50 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span>{PORTFOLIO_DATA.contact.email}</span>
                  </a>
                  
                  <a href={PORTFOLIO_DATA.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-white/50 dark:bg-slate-800/50 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                      <GithubIcon className="w-5 h-5" />
                    </div>
                    <span>GitHub Profile</span>
                  </a>
                  
                  <a href={PORTFOLIO_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-white/50 dark:bg-slate-800/50 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                      <LinkedinIcon className="w-5 h-5" />
                    </div>
                    <span>LinkedIn Network</span>
                  </a>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div variants={ANIMATION_VARIANTS.item} className="md:col-span-3">
              <GlassCard className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-900 dark:text-white placeholder-slate-400"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-900 dark:text-white placeholder-slate-400"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                    <textarea 
                      id="message" 
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-900 dark:text-white placeholder-slate-400 resize-none"
                      placeholder="How can I help you?"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-md"
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>
                        Send Message <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </GlassCard>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};