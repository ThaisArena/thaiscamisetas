import React from 'react';
import { ArrowDown, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { OFFICIAL_LINKS } from '../data/links';
import { renderPlatformIcon } from './BrandIcons';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-stone-100 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Copy & Direct Action Buttons */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Clean unboxed metadata separator */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-600 mb-4">
              <span>Camisetas Adulto</span>
              <span aria-hidden="true">·</span>
              <span>Masculinas & Femininas</span>
              <span aria-hidden="true">·</span>
              <span>Fio 30.1 Penteado</span>
              <span aria-hidden="true">·</span>
              <span>São Paulo</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight leading-[1.15] mb-5 [text-wrap:balance]">
              O caimento essencial que veste com elegância todos os dias.
            </h1>

            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed mb-8 max-w-xl">
              Algodão nobre pré-encolhido com toque aveludado, costuras reforçadas e a tradição de corte sob medida da AL Camisaria & Thais Tshirteria. Peças femininas e masculinas feitas para durar.
            </p>

            {/* Direct Action Hub */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <a
                href="#catalogo"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-zinc-950 hover:bg-zinc-800 rounded-md transition-all shadow-sm"
              >
                <span>Ver Catálogo Adulto</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={OFFICIAL_LINKS.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-md transition-all shadow-xs"
              >
                {renderPlatformIcon('whatsapp', 'w-4 h-4')}
                <span>WhatsApp (11) 9898-9864</span>
              </a>
            </div>

            {/* Trust points */}
            <div className="pt-6 border-t border-stone-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-zinc-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Gola reforçada que não deforma</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Compra protegida & troca fácil</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Pronta entrega para todo Brasil</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Hero Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] lg:aspect-[3/4] w-full rounded-xl overflow-hidden bg-stone-200 shadow-lg border border-stone-300/60">
              <img
                src="/src/assets/images/hero_tshirt_editorial_1790116950238.jpg"
                alt="Modelos vestindo camisetas adulto masculina e feminina Thais Tshirteria"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-5 text-white">
                <p className="text-xs uppercase tracking-widest font-semibold text-stone-200 mb-1">
                  Nova Coleção Permanente
                </p>
                <p className="text-sm font-medium text-white/95">
                  Modelagens ergonômicas para corpos reais do P ao XGG.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
