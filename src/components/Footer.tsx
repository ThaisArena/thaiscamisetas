import React from 'react';
import { OFFICIAL_LINKS } from '../data/links';
import { renderPlatformIcon } from './BrandIcons';
import { ShieldCheck, Truck, RefreshCw, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-white pt-16 pb-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 border-b border-zinc-800 text-zinc-300 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Entrega para todo Brasil</h4>
              <p className="text-zinc-400 mt-0.5">Envio Full pelo Mercado Livre, Shopee ou Correios</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
              <RefreshCw className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Troca & Devolução Fácil</h4>
              <p className="text-zinc-400 mt-0.5">Até 30 dias para trocas com atendimento humanizado</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Qualidade 100% Algodão</h4>
              <p className="text-zinc-400 mt-0.5">Fio 30.1 penteado premium e costura reforçada</p>
            </div>
          </div>
        </div>

        {/* 7 Requested Buttons Quick Hub */}
        <div className="py-10 border-b border-zinc-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                Nossos Links Oficiais
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                Conecte-se e Compre Conosco
              </h3>
            </div>
            <p className="text-xs text-zinc-400 max-w-md">
              Clique nos botões abaixo para acessar nossos canais de venda, redes sociais e localização física.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
            {/* 1. Facebook */}
            <a
              href={OFFICIAL_LINKS.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-blue-500 hover:bg-zinc-850 transition-all text-center group"
            >
              <div className="w-8 h-8 rounded-lg bg-[#1877F2] text-white flex items-center justify-center mb-1.5 group-hover:scale-105 transition-transform">
                {renderPlatformIcon('facebook', 'w-4 h-4')}
              </div>
              <span className="text-xs font-semibold text-white">Facebook</span>
              <span className="text-[10px] text-zinc-400 mt-0.5 flex items-center gap-0.5">
                Camisetas Rápido <ExternalLink className="w-2.5 h-2.5" />
              </span>
            </a>

            {/* 2. Instagram */}
            <a
              href={OFFICIAL_LINKS.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-pink-500 hover:bg-zinc-850 transition-all text-center group"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#FD1D1D] to-[#833AB4] text-white flex items-center justify-center mb-1.5 group-hover:scale-105 transition-transform">
                {renderPlatformIcon('instagram', 'w-4 h-4')}
              </div>
              <span className="text-xs font-semibold text-white">Instagram</span>
              <span className="text-[10px] text-zinc-400 mt-0.5 flex items-center gap-0.5">
                @thaistshirteria <ExternalLink className="w-2.5 h-2.5" />
              </span>
            </a>

            {/* 3. WhatsApp */}
            <a
              href={OFFICIAL_LINKS.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500 hover:bg-zinc-850 transition-all text-center group"
            >
              <div className="w-8 h-8 rounded-lg bg-[#25D366] text-white flex items-center justify-center mb-1.5 group-hover:scale-105 transition-transform">
                {renderPlatformIcon('whatsapp', 'w-4 h-4')}
              </div>
              <span className="text-xs font-semibold text-white">WhatsApp</span>
              <span className="text-[10px] text-zinc-400 mt-0.5 flex items-center gap-0.5">
                11 9898-9864 <ExternalLink className="w-2.5 h-2.5" />
              </span>
            </a>

            {/* 4. Mercado Livre */}
            <a
              href={OFFICIAL_LINKS.mercadolivre.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-yellow-400 hover:bg-zinc-850 transition-all text-center group"
            >
              <div className="h-8 px-2 rounded-lg bg-[#FFE600] text-[#2D3277] flex items-center justify-center mb-1.5 group-hover:scale-105 transition-transform shadow-xs">
                {renderPlatformIcon('mercadolivre', 'w-5 h-5 text-[#2D3277]')}
              </div>
              <span className="text-xs font-semibold text-white">Mercado Livre</span>
              <span className="text-[10px] text-zinc-400 mt-0.5 flex items-center gap-0.5">
                Ver Anúncio <ExternalLink className="w-2.5 h-2.5" />
              </span>
            </a>

            {/* 5. Shopee */}
            <a
              href={OFFICIAL_LINKS.shopee.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-orange-500 hover:bg-zinc-850 transition-all text-center group"
            >
              <div className="w-8 h-8 rounded-lg bg-[#EE4D2D] text-white flex items-center justify-center mb-1.5 group-hover:scale-105 transition-transform shadow-xs">
                {renderPlatformIcon('shopee', 'w-4 h-4')}
              </div>
              <span className="text-xs font-semibold text-white">Shopee</span>
              <span className="text-[10px] text-zinc-400 mt-0.5 flex items-center gap-0.5">
                @thais7447 <ExternalLink className="w-2.5 h-2.5" />
              </span>
            </a>

            {/* 6. Magalu */}
            <a
              href={OFFICIAL_LINKS.magalu.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-blue-400 hover:bg-zinc-850 transition-all text-center group"
            >
              <div className="h-8 px-2.5 rounded-lg bg-[#0086FF] text-white flex items-center justify-center mb-1.5 group-hover:scale-105 transition-transform shadow-xs">
                {renderPlatformIcon('magalu', 'w-14 h-3.5 text-white')}
              </div>
              <span className="text-xs font-semibold text-white">Magalu</span>
              <span className="text-[10px] text-zinc-400 mt-0.5 flex items-center gap-0.5">
                Vestem Thais <ExternalLink className="w-2.5 h-2.5" />
              </span>
            </a>

            {/* 7. Google Maps */}
            <a
              href={OFFICIAL_LINKS.googlemaps.url}
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-2 sm:col-span-3 lg:col-span-1 flex flex-col items-center justify-center p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-red-400 hover:bg-zinc-850 transition-all text-center group"
            >
              <div className="w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center mb-1.5 group-hover:scale-105 transition-transform">
                {renderPlatformIcon('googlemaps', 'w-4 h-4')}
              </div>
              <span className="text-xs font-semibold text-white">Google Maps</span>
              <span className="text-[10px] text-zinc-400 mt-0.5 flex items-center gap-0.5">
                AL Camisaria SP <ExternalLink className="w-2.5 h-2.5" />
              </span>
            </a>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-10 text-xs text-zinc-400">
          <div>
            <span className="font-display text-base font-bold text-white tracking-tight">
              THAIS TSHIRTERIA
            </span>
            <p className="mt-2 text-zinc-400 leading-relaxed">
              Especialistas em camisetas adultas masculinas e femininas. União perfeita entre alfaiataria tradicional da AL Camisaria e moda casual essencial contemporânea.
            </p>
          </div>

          <div>
            <h5 className="font-bold text-white mb-3 uppercase tracking-wider text-[11px]">
              Categorias
            </h5>
            <ul className="space-y-2">
              <li><a href="#catalogo" className="hover:text-white transition-colors">Camisetas Femininas Adulto</a></li>
              <li><a href="#catalogo" className="hover:text-white transition-colors">Camisetas Masculinas Fio 30.1</a></li>
              <li><a href="#catalogo" className="hover:text-white transition-colors">Modelagem Streetwear Oversized</a></li>
              <li><a href="#catalogo" className="hover:text-white transition-colors">Kits Promocionais</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white mb-3 uppercase tracking-wider text-[11px]">
              Atendimento & Vendas
            </h5>
            <ul className="space-y-2">
              <li><span className="text-white font-medium">WhatsApp:</span> 11 9898-9864</li>
              <li><span className="text-white font-medium">Horário:</span> Seg a Sex, 09h às 18h</li>
              <li><span className="text-white font-medium">Ateliê:</span> AL Camisaria — São Paulo, SP</li>
              <li><span className="text-white font-medium">Atacado:</span> Condições especiais para revenda</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white mb-3 uppercase tracking-wider text-[11px]">
              Compra Segura
            </h5>
            <p className="leading-relaxed mb-3">
              Todas as transações no Mercado Livre, Shopee e Magalu possuem garantia total do consumidor e proteção contra extravios.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Ambiente 100% Protegido</span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Thais Tshirteria & AL Camisaria. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <a href={OFFICIAL_LINKS.whatsapp.url} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300">
              Fale Conosco
            </a>
            <span aria-hidden="true">·</span>
            <a href={OFFICIAL_LINKS.googlemaps.url} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300">
              Como Chegar
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
