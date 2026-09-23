import React from 'react';
import { MapPin, Navigation, Clock, Phone, ExternalLink, ShieldCheck } from 'lucide-react';
import { OFFICIAL_LINKS } from '../data/links';
import { renderPlatformIcon } from './BrandIcons';

export const StoreLocation: React.FC = () => {
  return (
    <section id="atelie" className="py-16 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Story, Atelier & Address */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
              <span>Ateliê & Loja Física</span>
              <span aria-hidden="true">·</span>
              <span>São Paulo - SP</span>
              <span aria-hidden="true">·</span>
              <span>Retirada no Local</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight mb-4 [text-wrap:balance]">
              AL Camisaria & Thais Tshirteria: Tradição no corte e toque sob medida
            </h2>

            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-6">
              Além de comprar com frete rápido pelo Mercado Livre, Shopee e Magalu, você pode nos visitar pessoalmente em São Paulo. Experimente as modelagens, toque na malha 100% algodão e conheça de perto o padrão artesanal das nossas camisetas.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center text-zinc-900 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-red-500" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wide">
                    Endereço & Referência
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-600">
                    AL Camisaria — Camisas e Camisetas sob medida e sob encomenda
                  </p>
                  <p className="text-xs text-stone-500">
                    Região Central / Mooca / Brás — São Paulo, SP
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center text-zinc-900 shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-zinc-700" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wide">
                    Horários de Atendimento
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-600">
                    Segunda a Sexta: 09:00 às 18:00 | Sábado: 09:00 às 13:30
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center text-zinc-900 shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wide">
                    Telefone & WhatsApp Direto
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-600 font-semibold">
                    (11) 9898-9864
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Google Maps Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={OFFICIAL_LINKS.googlemaps.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold text-white bg-zinc-950 hover:bg-zinc-800 rounded-md transition-all shadow-xs"
              >
                {renderPlatformIcon('googlemaps', 'w-4 h-4 text-red-400')}
                <span>Abrir no Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={OFFICIAL_LINKS.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-emerald-900 bg-emerald-100 hover:bg-emerald-200 rounded-md transition-all"
              >
                {renderPlatformIcon('whatsapp', 'w-4 h-4 text-emerald-600')}
                <span>Avisar que estou a caminho</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Card Preview */}
          <div className="lg:col-span-6">
            <div className="p-6 rounded-2xl bg-stone-100 border border-stone-200/90 shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-red-600 text-white flex items-center justify-center">
                    <Navigation className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-zinc-900">
                      Localização Oficial no Google Maps
                    </h3>
                    <p className="text-[11px] text-zinc-500">
                      AL Camisaria & Thais Tshirteria
                    </p>
                  </div>
                </div>

                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Aberto para Visitas
                </span>
              </div>

              {/* Visual Stylized Map Box */}
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-stone-300/80 bg-[#e5e3df] mb-4 flex items-center justify-center group">
                {/* Stylized vector map streets background */}
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#9ca3af_1px,transparent_1px)] [background-size:16px_16px]" />
                
                <div className="relative text-center p-6 max-w-sm">
                  <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center mx-auto mb-2 shadow-lg animate-bounce">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h4 className="text-xs font-bold text-zinc-900 uppercase">
                    AL Camisaria
                  </h4>
                  <p className="text-[11px] text-zinc-600 mt-0.5">
                    Camisa e Camiseta sob medida e encomenda
                  </p>
                  <a
                    href={OFFICIAL_LINKS.googlemaps.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-zinc-900 bg-white hover:bg-stone-50 rounded-md shadow-xs border border-stone-300 transition-colors"
                  >
                    <span>Ver no Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-stone-600 pt-2 border-t border-stone-200">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Estacionamento e fácil acesso</span>
                </div>
                <span className="text-zinc-500">Região Mooca / SP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
