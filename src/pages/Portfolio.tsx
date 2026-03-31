import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { serviceData } from '../data/services';

export default function Portfolio() {
  const { t } = useLanguage();

  // Generate projects from service galleries
  const projects = Object.entries(serviceData).flatMap(([id, service]) => {
    const category = service.title.split(' in ')[0] || service.title;
    return (service.gallery || []).map((image, idx) => ({
      title: `${category} Project`,
      location: 'Central Florida',
      image,
      type: category
    }));
  });

  return (
    <div className="pt-20">
      <section className="bg-brand-dark py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            {t('portfolio_hero_title')}
          </motion.h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t('portfolio_hero_subtitle')}
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl shadow-xl aspect-[4/3]"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-brand-light font-bold text-sm uppercase tracking-widest mb-2">{project.type}</span>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="text-slate-300 text-sm">{project.location}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 bg-slate-50 p-12 rounded-[3rem] text-center space-y-6">
            <h2 className="text-3xl font-bold text-brand-dark">{t('portfolio_cta_title')}</h2>
            <p className="text-slate-600">{t('portfolio_cta_subtitle')}</p>
            <a href="/contact" className="btn-primary inline-block">
              {t('cta_schedule')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
