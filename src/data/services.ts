export interface Service {
  title: string;
  subtitle: string;
  description: string;
  included: string[];
  forWho: string[];
  whyUs: string;
  gallery?: string[];
}

export const serviceData: Record<string, Service> = {
  'leak-detection': {
    title: 'Pool Leak Detection in Central Florida',
    subtitle: 'Accurate pool leak detection services to identify hidden leaks, prevent water loss, and protect your pool from costly damage.',
    description: 'A leaking pool can lead to more than just water loss. It can cause structural damage, increase utility costs, and affect the overall performance of your pool system. At Waterland Pool\'s, our pool leak detection service is designed to quickly and accurately identify the source of the problem using specialized tools and proven techniques.',
    included: [
      'Detailed inspection of the pool structure and surfaces',
      'Pressure testing of plumbing lines',
      'Equipment and system evaluation',
      'Identification of underground or hidden leaks',
      'Clear assessment of the issue and recommended next steps'
    ],
    forWho: [
      'Homeowners noticing unexplained water loss',
      'Pools requiring frequent refilling',
      'Properties with signs of cracks, wet spots, or shifting ground',
      'Anyone concerned about potential hidden leaks'
    ],
    whyUs: 'With over 20 years of experience, Waterland Pool\'s provides reliable pool leak detection services with attention to detail and accurate diagnostics. We focus on identifying the real source of the problem, helping you avoid unnecessary repairs.',
    gallery: [
      'https://drive.google.com/thumbnail?id=1G7cNrCeeCyS7WlBBGOjEPa_ycuOiaiZv&sz=w1000',
      'https://drive.google.com/thumbnail?id=1fOKSrZuKWVdWm3MKffp4dCBdbp4bfMtD&sz=w1000',
      'https://drive.google.com/thumbnail?id=1r2XujnOVh90ml5d0G705wCNXmC2GNe5J&sz=w1000',
      'https://drive.google.com/thumbnail?id=1SyvF6TCu_M0WG0q2Feoejhx3QfTUndyE&sz=w1000',
      'https://drive.google.com/thumbnail?id=1kABm3MMr9-bgSjX-MOs6qzRvaYdGvagH&sz=w1000',
      'https://drive.google.com/thumbnail?id=1UQuD7pnkS0zvvRkzCeMnmHPz4EYrHkfX&sz=w1000'
    ]
  },
  'cleaning': {
    title: 'Pool Cleaning & Maintenance in Central Florida',
    subtitle: 'Professional weekly pool cleaning and maintenance service to keep your pool clean, balanced, and ready to enjoy all year long.',
    description: 'A well-maintained pool requires more than occasional cleaning. It needs consistent care, proper chemical balance, and regular system checks to ensure everything runs smoothly. At Waterland Pool\'s, our weekly pool cleaning and maintenance service ensures your pool stays clean, balanced, and properly maintained year-round.',
    included: [
      'Skimming debris from the surface',
      'Brushing walls, steps, and tiles',
      'Vacuuming the pool',
      'Emptying skimmer and pump baskets',
      'Checking and balancing water chemistry',
      'Inspecting equipment for proper operation',
      'Monitoring water level and circulation'
    ],
    forWho: [
      'Homeowners who want a clean, ready-to-use pool without the hassle',
      'Busy families who don’t have time for regular maintenance',
      'Property owners who want to protect their investment'
    ],
    whyUs: 'With over 20 years of experience, Waterland Pool\'s provides weekly pool cleaning and maintenance service tailored to each pool. We don’t just clean your pool — we maintain it with care, consistency, and attention to detail.',
    gallery: [
      'https://drive.google.com/thumbnail?id=1vOxH1hX4H3WGh1zKDUC5H31yxd6m3BFt&sz=w1000',
      'https://drive.google.com/thumbnail?id=1BA1yz9fr_OEp9drsS4_P1eCaAiRW55Ls&sz=w1000',
      'https://drive.google.com/thumbnail?id=1Dw0k3t9e1fs76A3SGHtLovnpIoyeheFF&sz=w1000',
      'https://drive.google.com/thumbnail?id=11mlnSFtqrh2A5YqqSqW_sJI8NcFtC7nB&sz=w1000'
    ]
  },
  'renovations': {
    title: 'Pool & Deck Renovation in Central Florida',
    subtitle: 'Professional pool and deck renovation services designed to upgrade your outdoor space with modern finishes and long-lasting results.',
    description: 'Over time, pools and outdoor areas can show signs of wear, outdated design, or structural issues. At Waterland Pool\'s, our pool and deck renovation services are designed to restore, upgrade, and transform your space with high-quality materials and expert craftsmanship.',
    included: [
      'Pool resurfacing and interior finish upgrades',
      'Installation of new pavers and deck surfaces',
      'Tile replacement and coping updates',
      'Structural repairs and surface restoration',
      'Design enhancements for improved layout',
      'Equipment upgrades and integration'
    ],
    forWho: [
      'Homeowners with outdated or worn pool areas',
      'Properties showing cracks, stains, or surface damage',
      'Clients looking to upgrade their outdoor living space',
      'Homeowners planning to increase property value'
    ],
    whyUs: 'With over 20 years of experience, Waterland Pool\'s delivers pool and deck renovation services with precision, attention to detail, and high-quality standards. We approach every project with a clear plan.',
    gallery: [
      'https://drive.google.com/thumbnail?id=1_OE0sqKKohsbht0yTj-EtM556Ta0JwZY&sz=w1000',
      'https://drive.google.com/thumbnail?id=1Kea9VnVb5cT_rWy1xWFk41gDlZNu93jo&sz=w1000',
      'https://drive.google.com/thumbnail?id=1Ax73isIqeMaAX6nh1-BAwYWUkA1YOV1H&sz=w1000',
      'https://drive.google.com/thumbnail?id=1Xuhpd8I7hfSVywjuROqaGVcS8P9wdWor&sz=w1000',
      'https://drive.google.com/thumbnail?id=1pyr6rG7wqrxXO6h-SzGdtWMBkxOhfSgZ&sz=w1000',
      'https://drive.google.com/thumbnail?id=1VpSTkFPid_G1dlynAoAPf7n0SFV19Tmj&sz=w1000',
      'https://drive.google.com/thumbnail?id=1PTHxfmnzVIg6sDw8hj4hBM3X6rGwzncG&sz=w1000',
      'https://drive.google.com/thumbnail?id=14hvOm0aAaRvMrTk-O9p7y8Ont8dVFuuH&sz=w1000',
      'https://drive.google.com/thumbnail?id=1FxTFiEfbXQ4AWp8No1RV98ZA_0Db0jiC&sz=w1000',
      'https://drive.google.com/thumbnail?id=1V5V7wcr40a0Xpgq5bgogEtkg_9-cjm6n&sz=w1000',
      'https://drive.google.com/thumbnail?id=14MC4b7p39dcVR30JfHGaqmswshoW3Er0&sz=w1000',
      'https://drive.google.com/thumbnail?id=1gjYi7UDdd-IHAg63NwwpAC6W0bmFfN9s&sz=w1000',
      'https://drive.google.com/thumbnail?id=1n1k-PbraNHNAh8m-aWTIOuiPjuKfUYtQ&sz=w1000',
      'https://drive.google.com/thumbnail?id=1zXHY6nHhMT0EicgPAgMluW2Uui22WPB4&sz=w1000',
      'https://drive.google.com/thumbnail?id=17HAweAyQBQiDY5vFAggtPMYwFMUP3krp&sz=w1000',
      'https://drive.google.com/thumbnail?id=11X3yaNP5-ZZ_d6yo3EtsWCfXOl_TE5Tz&sz=w1000',
      'https://drive.google.com/thumbnail?id=1fC89i_3tNxsID9dyKERiRoUH86Pt06IX&sz=w1000',
      'https://drive.google.com/thumbnail?id=1SQRpPaBMghMV47A5e6VAQlEnFHXD6RKM&sz=w1000',
      'https://drive.google.com/thumbnail?id=1g4EST9df52hAp_nfWKvARtAx8fzi4T0k&sz=w1000',
      'https://drive.google.com/thumbnail?id=16eKYqqOjJflQhvPVoJukDAy1VHaRccns&sz=w1000',
      'https://drive.google.com/thumbnail?id=1Tt2QD72zjdLGeBor8F2rXBTExjk2SxTM&sz=w1000'
    ]
  },
  'equipment': {
    title: 'Pool Equipment Repair & Installation in Central Florida',
    subtitle: 'Professional pool equipment repair and installation services to keep your system running efficiently, safely, and reliably.',
    description: 'Your pool equipment is essential to maintaining clean water, proper circulation, and overall system performance. When something isn’t working correctly, it can quickly affect the condition of your entire pool.',
    included: [
      'Pump repair and replacement',
      'Filter repair and installation',
      'Heater repair and installation',
      'Pool automation system setup',
      'System diagnostics and troubleshooting',
      'Equipment upgrades for improved efficiency'
    ],
    forWho: [
      'Homeowners experiencing equipment malfunctions',
      'Pools with poor circulation or filtration issues',
      'Systems that are outdated or inefficient',
      'Clients looking to upgrade to modern equipment'
    ],
    whyUs: 'With over 20 years of experience, Waterland Pool\'s delivers pool equipment repair and installation services with precision and reliability. We focus on accurate diagnostics.',
    gallery: [
      'https://drive.google.com/thumbnail?id=1b_uZNoNXCoZHjtzDyC_XDCef-cPV2q_Y&sz=w1000',
      'https://drive.google.com/thumbnail?id=1O9UTOtTnH03oPFmgPPhOtC-Ox2S6AdFi&sz=w1000',
      'https://drive.google.com/thumbnail?id=19E7M0TkC1WqzY-3LIzV8Xf2GnFr8fRoi&sz=w1000',
      'https://drive.google.com/thumbnail?id=1TxR3hPravMqsq4KOcWVK84U1PlxOAQsC&sz=w1000',
      'https://drive.google.com/thumbnail?id=1kqlvw0z8GFpZl_glwR6DCaKTWlILBoZB&sz=w1000',
      'https://drive.google.com/thumbnail?id=1iHMrq7B_JMXM6dXXX2DEjSvKaYNHPgjT&sz=w1000',
      'https://drive.google.com/thumbnail?id=1DABob9edxsP7MqcHx1k91qjkOGpyKvpO&sz=w1000',
      'https://drive.google.com/thumbnail?id=17YWIS00G3j2BObVYsrC3jYU5iN14lhJt&sz=w1000',
      'https://drive.google.com/thumbnail?id=1BBZ3dCkertGeBj8LnDJE3xLTa7i4twHc&sz=w1000',
      'https://drive.google.com/thumbnail?id=1xNw-8NTC4kDx6ri_TpA0eBTzD9IAC_FS&sz=w1000',
      'https://drive.google.com/thumbnail?id=1OQ3nOaSn4VI_5tdGZZ3cUm4hPt4DgAux&sz=w1000'
    ]
  },
  'sealing': {
    title: 'Paver Sealing for Pool Decks in Central Florida',
    subtitle: 'Professional paver sealing services to protect your pool deck, enhance its appearance, and extend its lifespan.',
    description: 'Pool decks are constantly exposed to sun, water, and heavy use, which can lead to fading, staining, and surface deterioration over time. Our paver sealing service is designed to protect and preserve your pool deck.',
    included: [
      'Thorough cleaning of the paver surface',
      'Removal of dirt, stains, and buildup',
      'Surface preparation for proper sealant',
      'Application of high-quality protective sealant',
      'Enhancement of color and surface finish',
      'Protection against moisture and wear'
    ],
    forWho: [
      'Homeowners with faded or stained pool decks',
      'Paver surfaces exposed to heavy sun and water',
      'Outdoor areas showing signs of wear',
      'Clients looking to protect their investment'
    ],
    whyUs: 'With over 20 years of experience, Waterland Pool\'s delivers professional paver sealing services with attention to detail and high-quality materials.',
    gallery: [
      'https://drive.google.com/thumbnail?id=1k4HgGZbEulyla1j4mfgR8wfOodZ4bBMu&sz=w1000',
      'https://drive.google.com/thumbnail?id=1jySjSad9WquGUZYsduF-Ix9j17_r2HeM&sz=w1000',
      'https://drive.google.com/thumbnail?id=1yTjcYUYi765bzkdTeJRt6qWen3_qgrFg&sz=w1000',
      'https://drive.google.com/thumbnail?id=1cqzekuspmO1m-XpleZWEVyEdAssZf1Pu&sz=w1000',
      'https://drive.google.com/thumbnail?id=189PF87c_rU5CWUKzggHFtVYgSSuz47-g&sz=w1000',
      'https://drive.google.com/thumbnail?id=1_kJBKGFkgWvIU5rb7TuYfkGkp1DHXs57&sz=w1000',
      'https://drive.google.com/thumbnail?id=1GmL1hVyjHK4sRhQlb2X6_49BRpHRx8EB&sz=w1000'
    ]
  },
  'acid-wash': {
    title: 'Acid Wash & Deep Pool Cleaning in Central Florida',
    subtitle: 'Professional acid wash and deep cleaning services to restore your pool’s appearance by removing stains and algae.',
    description: 'Over time, pools can develop stubborn stains, algae buildup, and discoloration that regular cleaning cannot remove. Our acid wash and deep pool cleaning service is designed to remove deep-set stains.',
    included: [
      'Draining the pool when necessary',
      'Removal of algae, stains, and mineral buildup',
      'Acid wash treatment for surface restoration',
      'Detailed cleaning of walls, steps, and floor',
      'Inspection of surface condition',
      'Preparation for refilling and system restart'
    ],
    forWho: [
      'Pools with visible stains or discoloration',
      'Pools affected by algae buildup',
      'Surfaces with calcium or mineral deposits',
      'Homeowners looking to restore the original look'
    ],
    whyUs: 'With over 20 years of experience, Waterland Pool\'s provides acid wash and deep pool cleaning services with precision and attention to detail.',
    gallery: [
      'https://drive.google.com/thumbnail?id=1b_uZNoNXCoZHjtzDyC_XDCef-cPV2q_Y&sz=w1000',
      'https://drive.google.com/thumbnail?id=1O9UTOtTnH03oPFmgPPhOtC-Ox2S6AdFi&sz=w1000',
      'https://drive.google.com/thumbnail?id=19E7M0TkC1WqzY-3LIzV8Xf2GnFr8fRoi&sz=w1000',
      'https://drive.google.com/thumbnail?id=1TxR3hPravMqsq4KOcWVK84U1PlxOAQsC&sz=w1000',
      'https://drive.google.com/thumbnail?id=1kqlvw0z8GFpZl_glwR6DCaKTWlILBoZB&sz=w1000',
      'https://drive.google.com/thumbnail?id=1iHMrq7B_JMXM6dXXX2DEjSvKaYNHPgjT&sz=w1000',
      'https://drive.google.com/thumbnail?id=1DABob9edxsP7MqcHx1k91qjkOGpyKvpO&sz=w1000',
      'https://drive.google.com/thumbnail?id=17YWIS00G3j2BObVYsrC3jYU5iN14lhJt&sz=w1000',
      'https://drive.google.com/thumbnail?id=1BBZ3dCkertGeBj8LnDJE3xLTa7i4twHc&sz=w1000',
      'https://drive.google.com/thumbnail?id=1xNw-8NTC4kDx6ri_TpA0eBTzD9IAC_FS&sz=w1000',
      'https://drive.google.com/thumbnail?id=1OQ3nOaSn4VI_5tdGZZ3cUm4hPt4DgAux&sz=w1000'
    ]
  },
  'automation': {
    title: 'Pool Automation & Control Systems in Central Florida',
    subtitle: 'Smart pool automation solutions that give you full control over your pool’s features with convenience and modern technology.',
    description: 'Modern pool automation systems allow you to control and manage your pool with ease, improving both convenience and performance. From your smartphone or tablet, you can control key features like heating, lighting, and pumps.',
    included: [
      'Installation of smart pool automation systems',
      'Integration with pumps, heaters, and lighting',
      'Setup and configuration of mobile app control',
      'System upgrades for existing equipment',
      'Testing and optimization for performance',
      'Guidance on system use and features'
    ],
    forWho: [
      'Homeowners looking to upgrade with smart tech',
      'Clients who want more control and convenience',
      'Pools with outdated or manual systems',
      'Homeowners interested in improving efficiency'
    ],
    whyUs: 'With over 20 years of experience, Waterland Pool\'s delivers pool automation and control system solutions with precision and attention to detail.',
    gallery: [
      'https://drive.google.com/thumbnail?id=1IQjR_cl3jmU1G3iBo672fvS_ULRb1kns&sz=w1000',
      'https://drive.google.com/thumbnail?id=1_hbsX3Yd8PO3sUfaXY2BciS9oXk-7b-n&sz=w1000',
      'https://drive.google.com/thumbnail?id=1NxWCNNa_clXJ6UnyYOhvfnk-xXGi1JeF&sz=w1000',
      'https://drive.google.com/thumbnail?id=1J70R9zxeydHoUUw4Pvdvbcy4NjynTEqa&sz=w1000',
      'https://drive.google.com/thumbnail?id=1K81_Eblq-4pDioKrnhD5Gt7Y-azPxaV8&sz=w1000',
      'https://drive.google.com/thumbnail?id=1OOICpmawi2SMmKXo-f0YxYV4_PKGbwJh&sz=w1000'
    ]
  }
};
