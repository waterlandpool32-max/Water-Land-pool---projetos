import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { ChevronRight, CheckCircle2 } from 'lucide-react';

interface ServiceDetailProps {
  title: string;
  subtitle: string;
  description: string;
  included: string[];
  forWho: string[];
  whyUs: string;
  gallery?: string[];
}

export default function ServiceDetail({ title, subtitle, description, included, forWho, whyUs, gallery }: ServiceDetailProps) {
  const { t } = useLanguage();

  return (
    <div className="pt-20">
      <section className="bg-brand-dark py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            {title}
          </motion.h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-brand-dark">Overview</h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {description}
                </p>
                <a href="/contact" className="btn-primary inline-block">
                  {t('form_submit')}
                </a>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-brand-dark">What's Included</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {included.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3 text-slate-600">
                      <CheckCircle2 className="text-brand-light shrink-0" size={20} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {gallery && gallery.length > 0 && (
                <div className="space-y-8 pt-8 border-t border-slate-100">
                  <h2 className="text-3xl font-bold text-brand-dark">Service Gallery</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {gallery.map((img, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
                      >
                        <img 
                          src={img} 
                          alt={`${title} gallery ${idx + 1}`}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-8">
              <div className="bg-slate-50 p-8 rounded-3xl space-y-6">
                <h3 className="text-xl font-bold text-brand-dark">Who This Service Is For</h3>
                <ul className="space-y-3">
                  {forWho.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-light mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-brand-dark p-8 rounded-3xl text-white space-y-4">
                <h3 className="text-xl font-bold">Why Choose Waterland Pool's</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {whyUs}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
