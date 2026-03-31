import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Target, Eye, Heart } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-brand-dark py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            {t('about_hero_title')}
          </motion.h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t('about_hero_subtitle')}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                {t('about_story_p1')}
              </p>
              <p>
                {t('about_story_p2')}
              </p>
              <p>
                {t('about_story_p3')}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&q=80&w=600" className="rounded-2xl shadow-lg mt-8" alt="Pool work" referrerPolicy="no-referrer" />
              <img src="https://drive.google.com/thumbnail?id=1_OE0sqKKohsbht0yTj-EtM556Ta0JwZY&sz=w1000" className="rounded-2xl shadow-lg" alt="Pool renovation" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-xl space-y-4">
              <div className="w-12 h-12 bg-brand-light/10 text-brand-light rounded-xl flex items-center justify-center">
                <Target size={24} />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark">{t('about_mission_title')}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t('about_mission_text')}
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-xl space-y-4">
              <div className="w-12 h-12 bg-brand-light/10 text-brand-light rounded-xl flex items-center justify-center">
                <Eye size={24} />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark">{t('about_vision_title')}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t('about_vision_text')}
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-xl space-y-4">
              <div className="w-12 h-12 bg-brand-light/10 text-brand-light rounded-xl flex items-center justify-center">
                <Heart size={24} />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark">{t('about_values_title')}</h3>
              <ul className="text-slate-600 text-sm space-y-2">
                <li><strong>{t('about_value_1_title')}</strong> {t('about_value_1_text')}</li>
                <li><strong>{t('about_value_2_title')}</strong> {t('about_value_2_text')}</li>
                <li><strong>{t('about_value_3_title')}</strong> {t('about_value_3_text')}</li>
                <li><strong>{t('about_value_4_title')}</strong> {t('about_value_4_text')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
