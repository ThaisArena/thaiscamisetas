import React from 'react';
import { Star, Instagram, Facebook } from 'lucide-react';
import { OFFICIAL_LINKS } from '../data/links';
import { renderPlatformIcon } from './BrandIcons';

export const ReviewsSection: React.FC = () => {
  const reviews = [
    {
      name: 'Mariana Silveira',
      role: 'Compradora verificada no Mercado Livre',
      text: 'A camiseta feminina baby look tem o caimento perfeito! O algodão é muito gostoso, não marca o sutiã e após 4 lavagens continua intacta. Comprei pelo link do Mercado Livre e chegou no dia seguinte.',
      product: 'Camiseta Feminina Soft Cotton Off-White',
      rating: 5,
    },
    {
      name: 'Carlos Eduardo Ramos',
      role: 'Cliente do Ateliê SP (AL Camisaria)',
      text: 'Fui até a AL Camisaria provar as camisetas masculinas. A qualidade do fio 30.1 e a costura da gola superam marcas famosas de shopping que cobram o dobro. Já garanti 5 peças.',
      product: 'Camiseta Masculina Heavy Crew Fio 30.1',
      rating: 5,
    },
    {
      name: 'Renata Albuquerque',
      role: 'Comprou pelo WhatsApp com a Thais',
      text: 'Atendimento impecável no WhatsApp! A Thais tirou minhas dúvidas de medidas e indicou o tamanho certinho para o meu manequim. O kit de 3 camisetas compensa demais.',
      product: 'Kit 3 Camisetas Essenciais Adulto',
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-[#fafaf9] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs uppercase tracking-wider font-semibold text-stone-500">
              Opinião de Quem Veste
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-zinc-950 mt-1 [text-wrap:balance]">
              Avaliações reais de clientes em todo o Brasil
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={OFFICIAL_LINKS.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-pink-700 bg-pink-50 hover:bg-pink-100 rounded-md border border-pink-200 transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>@thaistshirteria</span>
            </a>

            <a
              href={OFFICIAL_LINKS.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-md border border-blue-200 transition-colors"
            >
              <Facebook className="w-3.5 h-3.5" />
              <span>Camisetas Rápido</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.name}
              className="p-6 rounded-xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-3 text-amber-400">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-zinc-700 leading-relaxed italic mb-4">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100">
                <p className="text-xs font-bold text-zinc-950">{rev.name}</p>
                <p className="text-[11px] text-stone-500">{rev.role}</p>
                <span className="inline-block mt-2 text-[10px] font-medium text-zinc-600 bg-stone-100 px-2 py-0.5 rounded">
                  {rev.product}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
