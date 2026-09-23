import React from 'react';
import { ExternalLink } from 'lucide-react';
import { OFFICIAL_LINKS } from '../data/links';
import { renderPlatformIcon } from './BrandIcons';

export const ChannelsBar: React.FC = () => {
  return (
    <section id="canais-oficiais" className="py-14 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-wider font-semibold text-stone-500">
            Canais Oficiais & Marketplaces
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-zinc-950 mt-1.5 mb-3 [text-wrap:balance]">
            Escolha onde prefere comprar com segurança e agilidade
          </h2>
          <p className="text-sm text-zinc-600">
            Estamos presentes nas principais plataformas do Brasil, com frete rápido, cupons de desconto, atendimento personalizado e loja física para retirada.
          </p>
        </div>

        {/* 7 Official Buttons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* 1. Mercado Livre */}
          <a
            href={OFFICIAL_LINKS.mercadolivre.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between p-5 rounded-xl border border-stone-200 bg-[#FFFEEA]/50 hover:bg-[#FFFEEA] hover:border-[#FFE600] transition-all shadow-xs hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="h-10 px-2 rounded-lg bg-[#FFE600] text-[#2D3277] flex items-center justify-center font-bold shadow-xs">
                  {renderPlatformIcon('mercadolivre', 'w-7 h-7 text-[#2D3277]')}
                </div>
                <span className="text-[11px] font-semibold text-amber-900 uppercase tracking-wider">
                  Envio Full
                </span>
              </div>
              <h3 className="text-base font-bold text-zinc-900 group-hover:text-blue-900 transition-colors">
                Mercado Livre
              </h3>
              <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                Compre no Mercado Livre com entrega rápida e garantia total de compra protegida.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-amber-200/60 flex items-center justify-between text-xs font-semibold text-[#2D3277]">
              <span>Acessar Anúncio</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>

          {/* 2. Shopee */}
          <a
            href={OFFICIAL_LINKS.shopee.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between p-5 rounded-xl border border-stone-200 bg-[#FFF5F2]/60 hover:bg-[#FFF5F2] hover:border-[#EE4D2D] transition-all shadow-xs hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#EE4D2D] text-white flex items-center justify-center font-bold shadow-xs">
                  {renderPlatformIcon('shopee', 'w-6 h-6')}
                </div>
                <span className="text-[11px] font-semibold text-orange-800 uppercase tracking-wider">
                  Cupons & Frete
                </span>
              </div>
              <h3 className="text-base font-bold text-zinc-900 group-hover:text-[#EE4D2D] transition-colors">
                Shopee
              </h3>
              <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                Loja oficial @thais7447 na Shopee com cupons de desconto exclusivos e moedas.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-orange-200/60 flex items-center justify-between text-xs font-semibold text-[#EE4D2D]">
              <span>Acessar Shopee</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>

          {/* 3. Magazine Luiza */}
          <a
            href={OFFICIAL_LINKS.magalu.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between p-5 rounded-xl border border-stone-200 bg-[#F0F8FF]/60 hover:bg-[#F0F8FF] hover:border-[#0086FF] transition-all shadow-xs hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="h-10 px-3 rounded-lg bg-[#0086FF] text-white flex items-center justify-center font-bold shadow-xs">
                  {renderPlatformIcon('magalu', 'w-16 h-4.5 text-white')}
                </div>
                <span className="text-[11px] font-semibold text-blue-800 uppercase tracking-wider">
                  Magalu
                </span>
              </div>
              <h3 className="text-base font-bold text-zinc-900 group-hover:text-[#0086FF] transition-colors">
                Magazine Luiza
              </h3>
              <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                Blusa Vestem Thais Feminina e coleção oficial no Magazine Luiza.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-blue-200/60 flex items-center justify-between text-xs font-semibold text-[#0086FF]">
              <span>Ver no Magalu</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>

          {/* 4. WhatsApp */}
          <a
            href={OFFICIAL_LINKS.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between p-5 rounded-xl border border-emerald-300 bg-emerald-50/50 hover:bg-emerald-50 hover:border-emerald-500 transition-all shadow-xs hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#25D366] text-white flex items-center justify-center font-bold">
                  {renderPlatformIcon('whatsapp', 'w-6 h-6')}
                </div>
                <span className="text-[11px] font-semibold text-emerald-800 uppercase tracking-wider">
                  Atendimento VIP
                </span>
              </div>
              <h3 className="text-base font-bold text-zinc-900 group-hover:text-emerald-800 transition-colors">
                WhatsApp: (11) 9898-9864
              </h3>
              <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                Tire dúvidas sobre tamanhos, cores ou faça pedidos personalizados e no atacado diretamente.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-emerald-200/60 flex items-center justify-between text-xs font-semibold text-emerald-700">
              <span>Iniciar Conversa</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>

          {/* 5. Instagram */}
          <a
            href={OFFICIAL_LINKS.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between p-5 rounded-xl border border-stone-200 bg-stone-50/60 hover:bg-stone-50 hover:border-pink-400 transition-all shadow-xs hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-[#FD1D1D] to-[#833AB4] text-white flex items-center justify-center font-bold">
                  {renderPlatformIcon('instagram', 'w-6 h-6')}
                </div>
                <span className="text-[11px] font-semibold text-pink-700 uppercase tracking-wider">
                  Social & Looks
                </span>
              </div>
              <h3 className="text-base font-bold text-zinc-900 group-hover:text-pink-600 transition-colors">
                Instagram
              </h3>
              <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                Siga @thaistshirteria para inspirações de looks, lançamentos semanais e feedbacks de clientes.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-200 flex items-center justify-between text-xs font-semibold text-pink-700">
              <span>Ver @thaistshirteria</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>

          {/* 6. Facebook */}
          <a
            href={OFFICIAL_LINKS.facebook.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between p-5 rounded-xl border border-stone-200 bg-blue-50/30 hover:bg-blue-50/70 hover:border-blue-300 transition-all shadow-xs hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#1877F2] text-white flex items-center justify-center font-bold">
                  {renderPlatformIcon('facebook', 'w-6 h-6')}
                </div>
                <span className="text-[11px] font-semibold text-blue-700 uppercase tracking-wider">
                  Comunidade
                </span>
              </div>
              <h3 className="text-base font-bold text-zinc-900 group-hover:text-[#1877F2] transition-colors">
                Facebook: Camisetas Rápido
              </h3>
              <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                Página oficial no Facebook com avaliações, novidades e catálogo completo.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-blue-100 flex items-center justify-between text-xs font-semibold text-blue-700">
              <span>Seguir no Facebook</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>

          {/* 7. Google Maps */}
          <a
            href={OFFICIAL_LINKS.googlemaps.url}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:col-span-2 lg:col-span-2 group relative flex flex-col justify-between p-5 rounded-xl border border-stone-200 bg-stone-100/70 hover:bg-stone-100 hover:border-zinc-400 transition-all shadow-xs hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-zinc-900 text-white flex items-center justify-center font-bold">
                  {renderPlatformIcon('googlemaps', 'w-6 h-6 text-red-400')}
                </div>
                <span className="text-[11px] font-semibold text-zinc-600 uppercase tracking-wider">
                  Loja Física / Ateliê SP
                </span>
              </div>
              <h3 className="text-base font-bold text-zinc-900 group-hover:text-zinc-700 transition-colors">
                Google Maps: AL Camisaria & Retirada em São Paulo
              </h3>
              <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                Visite nosso ateliê físico em São Paulo. Camisas e camisetas sob medida, pronta entrega e atendimento artesanal especializado.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-200 flex items-center justify-between text-xs font-semibold text-zinc-900">
              <span>Ver Rota e Localização no Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
