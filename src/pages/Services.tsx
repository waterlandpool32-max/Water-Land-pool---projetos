import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Droplets, ShieldCheck, Hammer, Settings, Waves, Sparkles, Smartphone, ChevronRight } from 'lucide-react';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      id: 'leak-detection',
      title: t('service_leak_title'),
      icon: <Droplets />,
      desc: t('service_leak_desc'),
      priority: true
    },
    {
      id: 'cleaning',
      title: t('service_cleaning_title'),
      icon: <ShieldCheck />,
      desc: t('service_cleaning_desc')
    },
    {
      id: 'renovations',
      title: t('service_renovations_title'),
      icon: <Hammer />,
      desc: t('service_renovations_desc')
    },
    {
      id: 'equipment',
      title: t('service_equipment_title'),
      icon: <Settings />,
      desc: t('service_equipment_desc')
    },
    {
      id: 'sealing',
      title: t('service_sealing_title'),
      icon: <Waves />,
      desc: t('service_sealing_desc')
    },
    {
      id: 'acid-wash',
      title: t('service_acid_wash_title'),
      icon: <Sparkles />,
      desc: t('service_acid_wash_desc')
    },
    {
      id: 'automation',
      title: t('service_automation_title'),
      icon: <Smartphone />,
      desc: t('service_automation_desc')
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-brand-dark py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            {t('services_hero_title')}
          </motion.h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t('services_hero_subtitle')}
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-10 rounded-3xl bg-slate-50 border-2 transition-all hover:shadow-xl hover:bg-white ${service.priority ? 'border-brand-light' : 'border-transparent'}`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${service.priority ? 'bg-brand-light text-white' : 'bg-brand-dark text-white'}`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {service.desc}
                </p>
                <a 
                  href={`/services/${service.id}`}
                  className="inline-flex items-center font-bold text-brand-light hover:underline"
                >
                  {t('cta_view_details')} <ChevronRight size={20} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl font-bold">{t('services_not_sure_title')}</h2>
          <p className="text-xl opacity-90">{t('services_not_sure_subtitle')}</p>
          <a href="/contact" className="btn-primary bg-brand-dark hover:bg-slate-900 inline-block">
            {t('form_submit')}
          </a>
        </div>
      </section>
    </div>
  );
}
