import React from 'react';
import { OFFICIAL_LINKS } from '../data/links';
import { renderPlatformIcon } from './BrandIcons';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Atendimento rápido" className="fixed bottom-5 right-5 z-40 flex items-center group">
      <a
        href={OFFICIAL_LINKS.whatsapp.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp no número 11 9898-9864"
        className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 rounded-full shadow-xl transition-all duration-300 hover:scale-105"
      >
        <span className="w-6 h-6 flex items-center justify-center">
          {renderPlatformIcon('whatsapp', 'w-6 h-6')}
        </span>
        <span className="hidden sm:inline-block text-xs font-bold tracking-wide pr-1">
          WhatsApp: 11 9898-9864
        </span>
      </a>
    </aside>
  );
};
