import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const { t } = useLanguage();

  const reviews = [
    {
      name: 'John Smith',
      location: 'Orlando, FL',
      text: 'Waterland Pools transformed our backyard. Their attention to detail during the renovation was incredible. Highly recommend Miguel and his team!',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      location: 'Windermere, FL',
      text: 'We had a mysterious leak that two other companies couldn’t find. Waterland found it in an hour and fixed it the same day. Lifesavers!',
      rating: 5
    },
    {
      name: 'Michael Davis',
      location: 'Winter Park, FL',
      text: 'The weekly maintenance service is top-notch. I never have to worry about my pool being ready for the weekend. Reliable and professional.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      location: 'Lake Nona, FL',
      text: 'Excellent customer service. They took the time to explain everything during the estimate. Very transparent and fair pricing.',
      rating: 5
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
            {t('testimonials_hero_title')}
          </motion.h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t('testimonials_hero_subtitle')}
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-10 rounded-3xl relative"
              >
                <Quote className="absolute top-6 right-8 text-brand-light/20" size={48} />
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 italic mb-6 leading-relaxed">"{review.text}"</p>
                <div>
                  <h4 className="font-bold text-brand-dark">{review.name}</h4>
                  <p className="text-slate-500 text-sm">{review.location}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center space-y-8">
            <h2 className="text-3xl font-bold text-brand-dark">{t('testimonials_cta_title')}</h2>
            <a href="/contact" className="btn-primary inline-block">
              {t('cta_schedule')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
