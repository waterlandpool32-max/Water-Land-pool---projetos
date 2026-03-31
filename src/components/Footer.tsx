import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <a href="/" className="flex items-center">
              <img 
                src="https://i.postimg.cc/Dwjpnqm1/Logo-Waterland-Pools-removebg-preview.png" 
                alt="Waterland Pools" 
                className="h-[102px] w-auto brightness-0 invert"
                referrerPolicy="no-referrer"
              />
            </a>
            <p className="text-slate-300 text-sm leading-relaxed">
              {t('footer_description')}
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/waterland_pools/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-light transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer_quick_links')}</h4>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li><a href="/" className="hover:text-brand-light transition-colors">{t('nav_home')}</a></li>
              <li><a href="/about" className="hover:text-brand-light transition-colors">{t('nav_about')}</a></li>
              <li><a href="/services" className="hover:text-brand-light transition-colors">{t('nav_services')}</a></li>
              <li><a href="/portfolio" className="hover:text-brand-light transition-colors">{t('nav_portfolio')}</a></li>
              <li><a href="/testimonials" className="hover:text-brand-light transition-colors">{t('nav_testimonials')}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer_contact_us')}</h4>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-brand-light shrink-0" />
                <span>+1 (407) 722-2606</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-brand-light shrink-0" />
                <span>sales@waterlandpoolsfl.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-brand-light shrink-0" />
                <span>5973 Windhover Drive, Orlando, FL 32819</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer_hours')}</h4>
            <div className="text-slate-300 text-sm space-y-2">
              <p>{t('footer_mon_fri')}</p>
              <p className="text-brand-light font-semibold">{t('footer_free_estimates')}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-slate-400 text-xs">
          <p>&copy; {new Date().getFullYear()} Waterland Pools. {t('footer_rights')}</p>
        </div>
      </div>
    </footer>
  );
}
