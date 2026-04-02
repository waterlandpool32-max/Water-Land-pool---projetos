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
      <section className="relative py-32 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="Luxury Pool Background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-dark/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            {t('portfolio_hero_title')}
          </motion.h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            {t('portfolio_hero_subtitle')}
          </p>
        </div>

        {/* Wave Effect */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V120Z"></path>
          </svg>
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
