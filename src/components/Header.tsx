import React from 'react';
import { ShoppingBag, MessageCircle } from 'lucide-react';
import { OFFICIAL_LINKS } from '../data/links';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSizeGuide: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenSizeGuide,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-stone-50/95 backdrop-blur-md border-b border-stone-200">
      {/* 3-Zone Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="font-display text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 hover:text-zinc-700 transition-colors whitespace-nowrap shrink-0"
        >
          THAIS TSHIRTERIA
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-zinc-600">
          <a
            href="#catalogo"
            className="hover:text-zinc-950 transition-colors whitespace-nowrap"
          >
            Coleção Adulto
          </a>
          <a
            href="#canais-oficiais"
            className="hover:text-zinc-950 transition-colors whitespace-nowrap"
          >
            Onde Comprar
          </a>
          <button
            type="button"
            onClick={onOpenSizeGuide}
            className="hover:text-zinc-950 transition-colors whitespace-nowrap cursor-pointer"
          >
            Guia de Tamanhos
          </button>
          <a
            href="#atelie"
            className="hover:text-zinc-950 transition-colors whitespace-nowrap"
          >
            Ateliê & Localização
          </a>
          <a
            href="#qualidade"
            className="hover:text-zinc-950 transition-colors whitespace-nowrap"
          >
            Qualidade 100% Algodão
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={OFFICIAL_LINKS.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-md transition-colors whitespace-nowrap shadow-xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp (11) 9898-9864</span>
          </a>

          <button
            type="button"
            onClick={onOpenCart}
            aria-label="Abrir sacola de compras"
            className="relative p-2.5 text-zinc-800 hover:text-zinc-950 hover:bg-stone-200/60 rounded-md transition-colors cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-zinc-900 text-white text-[10px] font-bold rounded-full flex items-center justify-center tabular-nums">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
